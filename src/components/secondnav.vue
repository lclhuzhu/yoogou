<template>
	<div class="secondnav">
		<van-nav-bar title="二级密码" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<router-link to='/secondLevel' class="flex_between_v bor1" v-if='secondSet == -1'>
			<p>设置二级密码</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
		<router-link to='/modifypas' class="flex_between_v bor1" v-if='secondSet == 0'>
			<p>修改二级密码</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
		<router-link to='/forgetpas' class="flex_between_v">
			<p>忘记二级密码</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'secondnav',
		data () {
			return {
				secondSet: 0,				//是否设置二级密码 0设置   -1未设置
			}
		},
		created () {
			this.getcheck()
		},
		methods: {
			//返回
		    onClickLeft () {
		        this.$router.push({path:'/mine'})
		    },
		    //获取状态
		    getcheck () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/checkPasswordSet',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.secondSet = 0
			        } else if (res.data.code == -1) {
			          	that.secondSet = -1
			        }
		      	})
		    }
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;background: #FFFFFF;box-sizing: border-box;}
.bor1{border-bottom: 2px solid #E5E5E5;}
</style>