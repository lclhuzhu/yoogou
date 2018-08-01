<template>
	<div class="none">
		<van-nav-bar title="海汇" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<img src="@/assets/ws@2x.png"/>
		<p>该功能暂未开通</p>
	</div>
</template>

<script>
	export default({
		name: 'none',
		methods: {
			//返回
		    onClickLeft () {
		        this.$router.go(-1)
		    },
	    }
	})
</script>

<style scoped>
.none{text-align: center;}
</style>