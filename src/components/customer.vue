<template>
	<div class="customer">
		<van-nav-bar title="客服列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between_v" v-for="item in 5" :key='item'>
			<p class="list_p1">{{item}}号客服 小李</p>
			<p class="list_p2">微信号：12929303102</p>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'customer',
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
.customer{padding-top: .8rem;}
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;border-bottom: 2px solid #E5E5E5;background: #fff;}
.flex_between_v:last-child{border: 0;}
.list_p1{color: #666666;}
.list_p2{color: #222222;}
.van-nav-bar{position: fixed;top: 0;width: 100%;}
</style>