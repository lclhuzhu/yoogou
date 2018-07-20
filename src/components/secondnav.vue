<template>
	<div class="secondnav">
		<van-nav-bar title="二级密码" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<router-link to='/modifypas' class="flex_between_v bor1">
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
	export default({
		name: 'secondnav',
		data () {
			return {
				
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;background: #FFFFFF;box-sizing: border-box;}
.bor1{border-bottom: 2px solid #E5E5E5;}
</style>