<template>
	<div class="personalData">
		<van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between">
			<p>昵称</p>
			<input type="text" placeholder="请填写" v-model="name" v-if="existence == 0"/>
			<p class="int_p" v-else>{{ name }}</p>
		</div>
		<div class="flex_between">
			<p>支付宝</p>
			<input type="text" placeholder="请填写" v-model="alipay" v-if="existence == 0"/>
			<p class="int_p" v-else>{{ alipay }}</p>
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="(name && alipay) && (existence == 0)" @click="sub">
				保存
			</div>
			<div class="sub opy4" v-else>
				保存
			</div>
		</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">如需修改资料可找客服修改</p>
			<p class="pop_p2" @click="show = false">OK</p>
		</van-popup>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'personalData',
		data () {
			return {
				existence: 0,					//是否存在信息 0不存在 1存在
				name: '',
				alipay: '',
				show: false,					//弹窗
			}
		},
		created () {
			this.getInfo()
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		    //获取信息
		    getInfo () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUserInfo/getAppUserInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	that.name = res.data.data.nickName
			          	that.alipay = res.data.data.alipayAccount
			          	if (that.name || that.alipay) {
			          		that.existence = 1
			          		that.show = true
			          	}else{
			          		that.existence = 0
			          	}
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //保存
		    sub () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUserInfo/setAppUserInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		alipayAccount: that.alipay,
		          		nickName: that.name,
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	Toast(res.data.msg)
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    }
		}
	})
</script>

<style scoped>
.opy4{opacity: .4;}
.flex_between{background: #FFFFFF;padding: .3rem;}
.flex_between p{color: #999999;}
.flex_between input{background: #FFFFFF;border: 0;text-align: right;}
.peo_bom{background: #FFFFFF;position: absolute;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{padding: .26rem 0;width: 2.4rem;text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.int_p{color: #222222 !important;}
</style>