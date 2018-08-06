<template>
	<div class="mine">
		<van-nav-bar class='til' title="海汇"/>
		<div class="min_top flex_start">
			<div class="flex_start_v top_tel">
				<img class="tx_img" src="@/assets/tx@2x.png"/>
				<div class="">
					<p>{{phoneSlice}}</p>
					<div class="flex_start_v">
						<img class="" src="@/assets/dj@2x.png"/>
						<span class="font12">{{ userGradeName }}级会员</span>
					</div>
				</div>				
			</div>			
		</div>
		<div class="min_sec">
			<div class="top_con flex_between">
				<div class="flex_clu_v">
					<div class="flex_start">
						<p class="top_p1">冻结金额</p>
						<p class="top_p2">{{ price }}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">买入中订单数</p>
						<p class="top_p2">{{buyOrderNum}}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">卖出中订单数</p>
						<p class="top_p2">{{ saleOrderNum }}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">排单币</p>
						<p class="top_p2">{{ scheduleMoney }}</p>
					</div>
				</div>
				<div class="flex_clu_v">
					<div class="flex_start">
						<p class="top_p1">售出钱包</p>
						<p class="top_p2">{{ salePrice }}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">冻结中订单数</p>
						<p class="top_p2">{{ freezeOrderNum }}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">可卖出订单数</p>
						<p class="top_p2">{{ cansaleOrder }}</p>
					</div>
					<div class="flex_start">
						<p class="top_p1">直推收益</p>
						<p class="top_p2">{{ scheduleProfit }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="min_list">
			<router-link to='/myteam' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/tdicon@2x.png"/>
					<p class="list_p1">我的团队</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/personal' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/gricon@2x.png"/>
					<p class="list_p1">个人资料</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/wallet' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/qbicon@2x.png"/>
					<p class="list_p1">钱包地址</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/fortune' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/fbicon@2x.png"/>
					<p class="list_p1">汇币收益</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/myIntegral' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/zhicon@2x.png"/>
					<p class="list_p1">账户托管</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/ordered' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/yyicon@2x.png"/>
					<p class="list_p1">预约交易</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<div class="flex_between_v list_div" @click="pass">
				<div class="flex_start_v">
					<img src="@/assets/ejmmicon@2x.png"/>
					<p class="list_p1">二级密码</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</div>
			<router-link to='/customer' class="flex_between_v list_div">
				<div class="flex_start_v">
					<img src="@/assets/kficon@2x.png"/>
					<p class="list_p1">客服列表</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
			<router-link to='/membereg' class="flex_between_v list_div border0">
				<div class="flex_start_v">
					<img src="@/assets/hy.png"/>
					<p class="list_p1">会员注册</p>
				</div>
				<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'mine',
		data () {
			return {
				telephone: '11111111111',			//手机号
				buyOrderNum: 0,						//买入订单数
				cansaleOrder: 0,					//可卖出订单数
				freezeOrderNum: 0,					//冻结中订单数
				price: 0,							//冻结金额
				saleOrderNum: 0,					//卖出中订单数
				salePrice: 0,						//售出钱包
				scheduleMoney: 0,					//排单币
				scheduleProfit: 0,					//直推收益
				userGradeName: 0,					//用户会员名称
			}
		},
		created () {
			this.getdeatil()
		},
		computed: {
			phoneSlice () {
				return this.telephone.slice(0,3) + '****' + this.telephone.slice(7,11)
			}
		},
		methods: {
			//账户资料
			getdeatil () {
				let that = this
		        that.$axios({
		      	  	url: '/api/app/walletInfo/getWalletInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	that.telephone = res.data.data.telephone
			          	that.buyOrderNum = res.data.data.buyOrderNum
			          	that.cansaleOrder = res.data.data.cansaleOrder
			          	that.freezeOrderNum = res.data.data.freezeOrderNum
			          	that.price = res.data.data.price
			          	that.saleOrderNum = res.data.data.saleOrderNum
			          	that.salePrice = res.data.data.salePrice
			          	that.scheduleMoney = res.data.data.scheduleMoney
			          	that.scheduleProfit = res.data.data.scheduleProfit
			          	that.userGradeName = res.data.data.userGradeName
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
			},
			pass () {
				// 未设置二级密码
				// this.$router.push({path:'/secondLevel'})
				//已设置二级密码
				this.$router.push({path:'/secondnav'})
			}
		}
	})
</script>

<style scoped>
a{box-sizing: border-box;}
.mine{position: relative;}
.min_top{padding: .22rem .3rem;background: #FF6808;width: 100%;height: 2.7rem;color: #fff;display: flex;}
.tx_img{width: .9rem;height: .9rem;margin-right: .24rem;}
.top_tel{height: .9rem;}
.hy_img{width: .28rem;height: .28rem;}
.font12{font-size: .24rem;}
.top_con{width: 100%;height: 3rem;background-image: linear-gradient(-269deg, #FDF3EB 0%, #FFF8F3 98%);border-radius: 20px;padding: .42rem .3rem;}
.flex_clu_v{display: flex;flex-direction: column;justify-content: space-between;flex: 1;}
.top_p1{font-size: .24rem;color: #666666;width: 1.7rem;}
.top_p2{color: #222222;}
.min_list{margin: 0 .3rem; background: #fff;border-radius: 20px;padding: 0 .3rem;margin-top: 1.8rem;margin-bottom: .2rem;}
.list_div{height: .9rem; border-bottom: 2px solid #E5E5E5;}
.list_p1{color: #666666;margin-left: .1rem;}
.border0{border: 0;}
.right_img{width: .4rem; height: .4rem;}
.min_sec{padding: 0 .3rem;width: 100%; position: absolute;top: 1.26rem;}
</style>