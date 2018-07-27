<template>
	<div class="intpassword">
		<!--二级密码弹窗-->
		<van-popup v-model="passhow" :close-on-click-overlay='closepop'>
			<p class="pop_til"><span>提示</span><span class="close" @click="close">X</span></p>
			<div class="flex_center">
				<p>二级密码：</p>				
				<input type="password" id="" placeholder="请输入二级密码" v-model="password" />
			</div>
			<div class="flex_center">
				<p class="pop_p2" v-if="password" @click="subint">确认</p>
				<p class="pop_p2 opt4" v-else>确认</p>
				<p class="pop_p3" @click="close">取消</p>				
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
				//source: null,					//数据页面来源    0预约买入
				//autoType: ''.					//预约买入选取
				//passhow: true,
				closepop: false,
				password: '',
				show: false
			}
		},
		props: ['passhow', 'source','autoType'],
		methods: {
		    subint () {
	          	let that = this
	          	if (this.source == 0) {
	          		var url = '/api/app/automaticOrder/setAutoBuy'
	          		var data = {
	          			userId: localStorage.getItem('userId'),
		          		autoType: that.autoType,
		          		passWord: that.password
	          		}
	          	}
		        that.$axios({
		      	  	url: url,
		       		method: 'POST',
		        	data: qs.stringify(data)
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	Toast(res.data.msg)
			        	that.close()
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //关闭
		    close () {
		    	this.$emit('change',this.show)
//		    	this.passhow = false
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
/*弹窗结束*/
</style>