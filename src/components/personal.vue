<template>
	<div class="personal">
		<van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<router-link to='/personalData' class="flex_between_v bor1">
			<p>个人资料</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
		<router-link to='/bankAccount' class="flex_between_v">
			<p>预留银行账户</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
	</div>
</template>

<script>
	export default({
		name: 'personal',
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