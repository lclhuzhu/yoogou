<template>
	<div class="ordered">
		<van-nav-bar title="预约交易" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<router-link to='/orbuying' class="flex_between_v bor1">
			<p>预约买入</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</router-link>
		<div class="flex_between_v">
			<p>预约卖出</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'ordered',
		data () {
			return {
				show: true
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    }
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;background: #FFFFFF;box-sizing: border-box;}
.bor1{border-bottom: 2px solid #E5E5E5;}
</style>