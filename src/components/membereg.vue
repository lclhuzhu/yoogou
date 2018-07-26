<template>
	<div class="membereg">
		<van-nav-bar title="会员注册" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="top_div">
			<div class="flex_between_v mabom3">
				<p class="top_p">手机号</p>
				<input type="" name="" id="" value="" v-model="phone" class="int" placeholder="请输入手机号"/>
			</div>
			<div class="flex_between_v code_div">
				<p class="top_p">验证码</p>
				<input type="" name="" id="" value="" v-model="code" class="int" placeholder="请输入验证码"/>
				<p class="getcode opt4" v-if="show && !codeshow">获取验证码</p>
	            <p class="getcode" v-if="show && codeshow" @click="getCode">获取验证码</p>
	            <p class="getcode opt4" v-if="!show">{{count}}s后获取</p>
			</div>
		</div>
		<p class="bom_p">*推荐人为当前账户（获取用户的账户名）</p>
		<div class="peo_bom">
			<div class="sub" v-if="phone && code" @click="sub">
				注册
			</div>
			<div class="sub opt4" v-else>
				注册
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'membereg',
		data () {
			return {
				show: true,					//显示获取
			 	count: '',					//倒计时
			 	timer: null,				//倒计时事件
			 	codeshow: false,			//否不可点击
				code: '',
				phone: ''
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    // 获取验证码
		    getCode () {
		        let that = this
		        Toast('获取成功')
	          	that.codeGet()
	          	return false
		        that.$axios({
		      	  	url: '/leaderapi/sendVerifyCode.action',
		       		method: 'POST',
		        	data: qs.stringify({
		          		mobile: that.phone
		        	})
		      	}).then(res => {
			        if (res.data.status === '0') {
			          	Toast('获取成功')
			          	that.codeGet()
			        } else {
			          	Toast(res.data.message)
			        }
		      	})
		    },
		    //倒计时
		    codeGet () {
		        const TIME_COUNT = 60
		        let that = this
		        that.count = TIME_COUNT
		        that.show = false
		        that.timer = setInterval(() => {
		        if (that.count > 0 && that.count <= TIME_COUNT) {
		          	that.count--
		        } else {
		            that.show = true
		            clearInterval(this.timer)
		            that.timer = null
		        }
		      }, 1000)
		    },
		    //注册提交
		    sub () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/registerSelf',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId'),
		          		phone: that.phone,
		          		verificationCode: that.code
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	Toast(res.data.msg)
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		},
		watch: {
			phone () {
				if (this.phone) {
					this.codeshow = true
				} else {
					this.codeshow = false
				}
			}
		}
	})
</script>

<style scoped>
.opt4{opacity: .4;}
.top_p{width: .84rem;}
.mabom3{margin-bottom: .3rem;}
.bom_p{padding: .3rem;color: #999999;font-size: .24rem;background: #FCFCFC;}
.top_div{padding: .28rem .3rem;background: #fff;border-bottom: 2px dashed #E5E5E5;}
.int{border: 2px solid #E9E9E9;border-radius: 40px;margin-left: .2rem;flex:1; height: .8rem; padding: .2rem;box-sizing: border-box;}
.getcode{font-size: .3rem;color: #FFFFFF !important;margin-bottom: 0 !important;margin-left: .3rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;width: 2.4rem;height: .8rem;text-align: center;;line-height: .8rem;}
.code_div input{width: 100%;}
</style>