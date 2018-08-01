<template>
<div id="trusteeship">
	<van-nav-bar title="积分" left-text="返回" left-arrow @click-left="onClickLeft"/>
	<div class="flex_between_v top_flex">
		<div class="flex_between_v" @click="select">
			<img src="@/assets/Combined Shape@2x.png"/>
			<p class="top_p">{{ phone }}</p>
			<img src="@/assets/bom_btn_in@2x.png"/>
		</div>
		<p @click="onClickRight">返回我的账户</p>
	</div>
	<div class="trusteeship">
		<div class="trusteeship-icont">
			积分购
		</div>
		<ul style="padding: .2rem 0;">
			<div @click="shipTrans">
				<li style="border-right: 1px solid #E5E5E5;">
					<div class="trusteeship-mairu">
						<ul>
							<li>
								<p>买入商品</p>
								<span>PURCHUSE</span>
							</li>
							<li>
								<div class="trusteeship-mairu-img">
									<img src="@/assets/smr@2x.png"/>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</div>
			<li @click="linkmytrusteeship">
				<div class="trusteeship-maichu">
					<ul>
						<li>
							<p>卖出产品</p>
							<span>SELLOUT</span>
						</li>
						<li>
							<div class="trusteeship-maichu-img">
								<img src="@/assets/smc@2x.png"/>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
	<div @click="DealList">
		<div class="trusteeship-goods">
			<div class="flex_between_v">
				<img src="@/assets/jfpic@2x.png"/>
				<div class="trusteeship-goods-text">
					<h3>积分交易情况</h3>
					<p>最新交易细节</p>
				</div>				
			</div>
			<img src="@/assets/right@2x.png"/>
		</div>
	</div>
	<!--子账户列表-->
	<van-popup v-model="show" position="bottom ">
		<van-picker show-toolbar title="选择账户" :item-height='height' :columns="list" @cancel="show == false" @confirm="onConfirm"/>
	</van-popup>
</div>	
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'trusteeship',
		data () {
			return {
				userId:'',					//用户id设置	
				phone: '请选择账户',			//子账户手机号
				phoneSet: false,			//是否选择账户
				list: [],					//下级列表
				listId:[],					//下级id
				show: false,				//列表弹窗
				height: 60					//弹窗高度
			}
		},
		created () {
			this.userId = localStorage.getItem('myId')
			this.getson()
		},
		methods: {
			//返回
		    onClickLeft () {
		    	localStorage.setItem('userId',this.userId)
		        this.$router.push({path:'/myIntegral'})
		    },
		    //返回我的账户
		    onClickRight() {
		    	localStorage.setItem('userId',this.userId)
		      	this.$router.push({path:'/mine'})
		    },
		    //查看自己的下级
		    getson () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/getMyTrustList',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('myId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	let list = res.data.data
			        	for (let i = 0; i < list.length; i++) {
			        		that.list.push(list[i].telephone)
			        		that.listId.push(list[i].userId)
			        	}
			        } else if (res.data.code == -1) {
			        	Toast(res.data.msg)
			        }
		      	})
		    },
		    //选择账户
		    select () {
		    	if (this.list.length == 0) {
		    		Toast('暂无账户信息')
		    	} else {
		    		this.show = true
		    	}
		    },
		    //确认选择
		    onConfirm(value, index) {
		    	localStorage.setItem('userId',this.listId[index])
		    	this.phone = value
		    	this.phoneSet = true
		        this.show = false
		    },
		    //跳转买入商品
		    shipTrans () {
		    	if (this.phoneSet) {
					this.$router.push({path:'/integralTrans'})					
				} else {
					Toast('请选择账户')
				}
		    },
			//跳转卖出产品
			linkmytrusteeship () {
				if (this.phoneSet) {
					this.$router.push({path:'/integerSaleMain'})					
				} else {
					Toast('请选择账户')
				}
			},
			//跳转积分交易情况
			DealList () {
				if (this.phoneSet) {
					this.$router.push({path:'/IntegralDealList'})					
				} else {
					Toast('请选择账户')
				}
			}
		}
	})
</script>

<style scoped>	
	/*============积分购买===================*/
	#trusteeship{overflow: hidden;}
	.top_flex{padding: .32rem .3rem; background: #fff;border-bottom: 1px solid #E5E5E5;}
	.top_p{margin: 0 .1rem;font-size: .24rem;}
	.trusteeship{
		height: 3.2rem;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}
	.trusteeship-icont{
		width: 1.44rem;
		height: 0.48rem;
		color: #FFFFFF;
		background-color: #FF6E07;
		position: absolute;
		border-bottom-right-radius: 0.24rem;
		text-align:center ;
	}
	.trusteeship ul{
		width: 100%;
		height: 100%;
	}
	.trusteeship ul li{
		width: 50%;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	/*====买入======*/
	.trusteeship-mairu{
		width: 100%;
		height: 100%;
	}
	.trusteeship-mairu ul li{
		width: 50%;
		text-align: center;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	.trusteeship-mairu p{
		margin-top: .88rem;
	}
	.trusteeship-mairu span{
		color:rgba(204,204,204,0.40);
	}
	.trusteeship-mairu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.44rem;
	}
	.trusteeship-mairu-img img{
		width: 100%;
		height: 100%;
	}
	/*====卖出======*/
	.trusteeship-maichu{
		width: 100%;
		height: 100%;
	}
	.trusteeship-maichu ul li{
		width: 50%;
		height: 100%;
		text-align: center;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	.trusteeship-maichu p{
		margin-top: .88rem;
	}
	.trusteeship-maichu span{
		color:rgba(204,204,204,0.40);
	}
	.trusteeship-maichu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.44rem;
	}
	.trusteeship-maichu-img img{
		width: 100%;
		height: 100%;
	}
	/*====积分购买情况===========*/
	.trusteeship-goods{
		height: 1.6rem;
		border-top: 1px solid #e5e5e5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 .3rem;
		background: #FCFCFC;
	}
	.trusteeship-goods-img{
		width: 0.9rem;
		height: 0.9rem;	
		float: left;
		margin: 0.4rem ;
		
	}
	.trusteeship-goods-img img{
		width: 100%;
		height: 100%;
	}
	.trusteeship-goods-text{
		width: 4rem;
		height: 0.9rem;
		margin-left: .4rem;
		line-height: 0.45rem;
	}
	.trusteeship-goods-text p{
		color: #999999;
	}
	.next{
		float: right;
		position: relative;
		top: -0.6rem;
		right: 0.22rem;
	}
</style>