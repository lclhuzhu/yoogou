<template>
	<div class="modifypas">
		<van-nav-bar title="修改二级密码" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="add_div">
			<p>请输入原有的二级密码</p>
			<input type="password" name="" id="pass1" value="" v-model="old" placeholder="请输入6-20位字符"/>
		</div>
		<div class="add_div padtop0">
			<p>请输入您要设置的二级密码：</p>
			<input type="password" name="" id="pass2" value="" v-model="first" placeholder="请输入6-20位字符"/>
		</div>
		<div class="add_div padtop0">
			<p>请再输入一次：</p>
			<input type="password" name="" id="pass3" value="" v-model="second" placeholder="请输入6-20位字符"/>
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="old && first && second" @click="sub">
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
		name: 'modifypas',
		data () {
			return {
				show: false,					//弹窗
				old:'',
				first:'',
				second: ''
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
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
		    	that.$axios({
		      	  	url: '/api/app/appUser/updatePassword',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId'),
		          		oldPassword: that.old,
		          		password: that.first,
		          		passwordVerify: that.second
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.show = true
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
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
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>