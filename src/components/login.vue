<template>
	<div class="login">
		<img class="logo_img" src="@/assets/logo@2x.png"/>
		<div class="lo_til">
			海汇
		</div>
		<div class="com">
			<div class="int_fle">
				<img src="@/assets/phoneicon@2x.png"/>
				<input type="text" name="" id="" v-model="phone" placeholder="请输入手机号"/>
				<img src="@/assets/shanchu.png" v-if="phone" @click="phone = ''"/>
			</div>
			<div class="int_fle">
				<img src="@/assets/yzmicon@2x.png"/>
				<input type="text" name="" id="" v-model="code" placeholder="请输入验证号"/>
				<img src="@/assets/shanchu.png" v-if="code" @click="code = ''"/>
				<p class="getcode opt5" v-if="show && !codeshow">获取验证码</p>
	            <p class="getcode" v-if="show && codeshow" @click="getCode">获取验证码</p>
	            <p class="getcode opt5" v-if="!show">{{count}}s后获取</p>
			</div>
			<p class="link_p">未注册？<router-link to='/regist'>前往注册</router-link></p>
		</div>
		<div class="reg" v-if="phone && code" @click="logClick">
			登录
		</div>
		<div class="reg opt5" v-else>
			登录
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'login',
		data () {
			return {
				show: true,					//显示获取
			 	count: '',					//倒计时
			 	timer: null,				//倒计时事件
			 	codeshow: false,			//否不可点击
				phone:'',
				code: '',
				isTrust: 0					//托管状态 0为托管   1已托管
			}
		},
		methods: {
			// 获取验证码
		    getCode () {
		        let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/getVerificationCode',
		       		method: 'POST',
		        	data: qs.stringify({
		          		phone: that.phone
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	Toast('获取成功')
			          	that.codeGet()
			        } else {
			          	Toast(res.data.msg)
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
		    //登录
		    logClick () {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/login',
		       		method: 'POST',
		        	data: qs.stringify({
		          		phone: that.phone,
		          		verificationCode: that.code
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	Toast(res.data.msg)
			        	localStorage.setItem('userId',res.data.data.userId)
			        	localStorage.setItem('myId',res.data.data.userId)
			        	localStorage.setItem('myPhone',that.phone)
			        	localStorage.setItem('isTrust',res.data.data.isTrust)
			        	that.$router.push({path:'/home'})
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    }
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
.login{overflow: hidden;height: 100%;background: #fff;position: absolute;width: 100%;top: 0;}
.opt5{opacity: .5;}
.logo_img{display: block;margin: auto;margin-top: 1.36rem;}
.lo_til{text-align: center;font-size: .32rem;color: #666666;}
.com{margin: 1.2rem .74rem .5rem .74rem;}
.int_fle{display: flex;align-items: center;border-bottom: .02rem solid #bbbbbb;padding: .2rem 0;margin-bottom: .28rem;}
.int_fle input{margin-left: .2rem; width: 100%;font-size: .3rem;border: 0;}
.getcode{color: #FE7113;font-size: .3;white-space: normal;width: 50%;text-align: right;}
.link_p{color: #FE7113;font-size: .3rem;text-align: right;}
.link_p a{border-bottom: 1px solid #FE7113;padding-bottom: 2px;color: #FE7113;}
.reg{background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: .44rem;margin: .48rem .74rem;text-align: center;height: .88rem;line-height: .88rem;color: #fff;}
</style>