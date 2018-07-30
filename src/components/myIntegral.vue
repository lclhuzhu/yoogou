<template>
	<div class="myIntegral">
		<van-nav-bar title="积分" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between_v bor1" v-if='isTrust == 0' @click="trust">
			<p>托管本账号</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
		<div class="flex_between_v bor1" v-if='isTrust == 1' @click="tgshow = true">
			<p>取消托管</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
		<div class="flex_between_v" @click="tolink">
			<p>查看被托管人账户</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
		<!--托管弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">{{ msg }}</p>
		</van-popup>
		<!--取消托管弹出框-->
		<van-popup v-model="tgshow">
			<p class="pop_til"><span>提示</span><span class="close" @click="tgshow = false">X</span></p>
			<p class="pop_p1">确认取消托管账户？</p>
			<div class="flex_center">
				<p class="pop_p2" @click="cancel">确认</p>
				<p class="pop_p3" @click="tgshow = false">取消</p>				
			</div>
		</van-popup>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'myIntegral',
		data () {
			return {
				show: false,					//无托管人
				tgshow: false,					//取消托管
				isTrust: 0,						//托管状态 0为托管 1已托管
				msg:'',							//弹窗信息
			}
		},
		created () {
			this.isTrust = localStorage.getItem('isTrust')
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //托管账号
		    trust () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/trustUser',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.msg = res.data.msg
			        	that.isTrust = 1
			        	localStorage.setItem('isTrust','1')
			        	that.show = true
			        } else if (res.data.code == -1) {
			        	Toast(res.data.msg)
			        	that.isTrust = 0
			        	localStorage.setItem('isTrust','0')
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //取消托管
		    cancel () {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/cancelTrustUser',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.isTrust = 0
			        	Toast(res.data.msg)
			        	localStorage.setItem('isTrust','0')
			        	that.tgshow = false
			        } else if (res.data.code == -1) {
			        	Toast(res.data.msg)
			        	that.isTrust = 1
			        	localStorage.setItem('isTrust','1')
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //进入积分
		    tolink () {
		    	this.$router.push({path:'/trusteeship'})
		    }
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;background: #FFFFFF;box-sizing: border-box;}
.bor1{border-bottom: 2px solid #E5E5E5;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>