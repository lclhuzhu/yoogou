<template>
	<div class="intpassword">
		<!--二级密码弹窗-->
		<van-popup v-model="passhow" :close-on-click-overlay='closepop'>
			<p class="pop_til"><span>提示</span><span class="close" @click="passhow = false">X</span></p>
			<div class="flex_center">
				<p>二级密码：</p>
				<input type="password" id="" placeholder="请输入二级密码" v-model="password" />
			</div>
			<div class="flex_center">
				<p class="pop_p2" v-if="password" @click="subint">确认</p>
				<p class="pop_p2 opt4" v-else>确认</p>
				<p class="pop_p3" @click="passhow = false">取消</p>
			</div>
		</van-popup>
		<!--直推收益弹窗-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<div class="flex_center">
				<p class="pop_p1 style0">{{ msg }}</p>
			</div>
			<div class="flex_center bottom_ok">
				<p class="pop_p2" @click="show = false">OK</p>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'intpassword',
		data () {
			return {
				//source: null,					//数据页面来源    0预约买入  1预约卖出  2卖出订单 3直推收益卖出 4卖出订单收款详情5商品购买来源
				//autoType: ''.					//预约买入选取
				//saleType: '',				    //预约卖出数据来源
				passhow: false,
				closepop: false,
				password: '',
				msg: '',						//直推收益提示
				show: false,					//直推收益弹窗
			}
		},
		props: ['source','autoType', 'saleType', 'userOrdersId', 'money', 'orderId', 'type', 'itemid'],
		methods: {
			//判断二级密码
		    check () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/checkPasswordSet',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.status = 0
			        	that.passhow = true
			        } else if (res.data.code == -1) {
			        	Toast('请先设置二级密码')
			        	that.status = -1
			        	that.passhow = false
			          	that.$router.push({path:'/secondnav'})
			        }
		      	})
		    },
		    subint () {
	          	let that = this
	          	var url = ''
	          	var data = ''
	          	switch (that.source){
	          		case 0:
	          			url = '/api/app/automaticOrder/setAutoBuy'
	          			data = {
		          			userId: localStorage.getItem('userId'),
			          		autoType: that.autoType,
			          		passWord: that.password
		          		}
	          			break;
          			case 1:
	          			url = '/api/app/automaticOrder/setAutoSale'
	          			data = {
		          			userId: localStorage.getItem('userId'),
			          		autoType: that.autoType,
			          		passWord: that.password
		          		}
          				break;
          			case 2:
	          			url = '/api/app/presale/saleItem'
	          			data = {
		          			userId: localStorage.getItem('userId'),
			          		passWord: that.password,
			          		userOrdersId: that.userOrdersId,
		          		}
	          			break;
          			case 3:
	          			url = '/api/app/presale/saleScheduleProfit'
	          			data = {
		          			userId: localStorage.getItem('userId'),
			          		passWord: that.password,
			          		money: that.money,
		          		}
	          			break;
          			case 4:
	          			url = '/api/app/presaleOrder/updateMatchingOrderInfo'
	          			data = {
		          			orderId: that.orderId,
			          		passWord: that.password,
			          		type: that.type,
		          		}
	          			break;
          			case 5:
	          			url = '/api/app/buyItem/buyItem'
	          			data = {
		          			itemId:that.itemid,
							userId: localStorage.getItem('userId'),
			          		payPassword: that.password
			          	}
          				break;
                	default:
              		this.$emit('inputEnd',{
                      	password: that.password,
                  	})
                  	this.close();
          				break;
	          	}
		        that.$axios({
		      	  	url: url,
		       		method: 'POST',
		        	data: qs.stringify(data)
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	Toast(res.data.msg)
			        	that.close()
			        	that.passhow = false
			        } else {
			        	if(that.source == 3){
			        		that.passhow = false
			        		that.msg = res.data.msg
			        		console.log(that.msg)
			        		that.show = true
			        	} else {
			        		Toast(res.data.msg)
			        	}
			        }
		      	})
		    },
		    //关闭
		    close () {
		    	let that = this
		    	that.passhow = false
		    	this.$emit('change')
		    },
		    //直推收益失败
		    closeSale () {
		    	let that = this
		    	that.passhow = false
		    	this.$emit('changeSale')
		    }
		}
	})
</script>

<style scoped>
/*弹窗*/
.opt4{opacity: .4;}
.flex_center{font-size: .32rem;margin: .6rem 0;}
input{padding: .1rem;box-sizing: border-box;border: 0;}
.van-popup{width: 6.34rem;min-height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
.bottom_ok{position: absolute; bottom: -.2rem;left: 50%;transform: translateX(-50%);}
.style0{margin: 0;font-size: .28rem;}
/*弹窗结束*/
</style>
