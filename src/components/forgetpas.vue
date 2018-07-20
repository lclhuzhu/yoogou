<template>
	<div class="forgetpas">
		<van-nav-bar title="找回二级密码" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="add_div">
			<p>请输入您收到的验证码</p>
			<div class="flex_between_v">
				<input type="text" class="code_int" v-model="code" placeholder="请输入验证码"/>
	            <p class="getcode" v-if="codeshow" @click="getCode">获取验证码</p>
	            <p class="getcode opt4" v-if="!codeshow">{{count}}s后获取</p>
			</div>
		</div>
		<div class="add_div padtop0">
			<p>请输入您要设置的二级密码：</p>
			<input type="text" name="" id="" value="" v-model="first" placeholder="请输入6-20位字符"/>
		</div>
		<div class="add_div padtop0">
			<p>请再输入一次：</p>
			<input type="text" name="" id="" value="" v-model="second" placeholder="请输入6-20位字符"/>
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="code && first && second" @click="sub">
				提交
			</div>
			<div class="sub opt4" v-else>
				提交
			</div>
		</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">二级密码修改成功！</p>
			<p class="pop_p2" @click="show = false">确认</p>
		</van-popup>
	</div>
</template>

<script>
	import qs from 'qs'
	import { Toast } from 'vant'
	export default({
		name: 'forgetpas',
		data () {
			return {
				codeshow: true,					//显示获取
			 	count: '',						//倒计时
			 	timer: null,					//倒计时事件
				show: false,					//弹窗
				code:'',
				first:'',
				second: ''
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
		        that.codeshow = false
		        that.timer = setInterval(() => {
		        if (that.count > 0 && that.count <= TIME_COUNT) {
		          	that.count--
		        } else {
		            that.codeshow = true
		            clearInterval(this.timer)
		            that.timer = null
		        }
		      }, 1000)
		    },
		    //提交
		    sub () {
		    	let that = this
		    	if(that.first != that.second){
		    		Toast('两次输入密码不一致')
		    		return false
		    	}
		    	if((that.first.length<6 || that.first.length>20) || that.second.length<6 || that.second.length>20){
		    		Toast('请输入6-20位字符')
		    		return false
		    	}
		    }
		}
	})
</script>

<style scoped>
.opt4{opacity: .4;}
.peo_bom{background: #FFFFFF;position: fixed;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
.add_div{width: 100%;padding: .5rem .3rem;background: #FFFFFF;}
.add_div p{color: #666666;font-size: .32rem;margin-bottom: .3rem;}
.add_div input{border: 2px solid #E9E9E9;border-radius: 40px;width: 100%;height: .8rem;padding: .2rem;box-sizing: border-box;}
.padtop0{padding-top: 0;}
.getcode{font-size: .3rem;color: #FFFFFF !important;margin-bottom: 0 !important;margin-left: .3rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;width: 2.4rem;height: .8rem;text-align: center;;line-height: .8rem;}
.code_int{flex: 1;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>