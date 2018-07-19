<template>
	<div class="userDetails">
		<van-nav-bar title="用户详情" left-text="返回" left-arrow @click-left="onClickLeft"/>	
		<div class="flex_between_v">
			<p>账户</p>
			<p class="fle_p2">15911111111</p>
		</div>
		<div class="flex_between_v">
			<p>买入累计（笔）</p>
			<p class="fle_p2">15911111111</p>
		</div>
		<div class="flex_between_v">
			<p>卖出累计（笔）</p>
			<p class="fle_p2">15911111111</p>
		</div>
		<div class="flex_between_v">
			<p>最近一笔买入</p>
			<p class="fle_p2">15911111111</p>
		</div>
		<div class="flex_between_v">
			<p>最近一笔卖出</p>
			<p class="fle_p2">15911111111</p>
		</div>
		<div class="flex_between_v">
			<p>是否托管</p>
			<p class="fle_p2">15911111111</p>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'userDetails',
		data () {
			return {
				
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		    //详情
		    detail () {
		    	this.$router.push({path:'/userDetails'})
		    }
	    }
	})
</script>

<style scoped>
.flex_between_v{color: #999999;padding: 0 .3rem;border-bottom: 2px solid #E5E5E5;width: 100%;height: 1rem;background: #FFFFFF;}
.flex_between_v:last-child{border: 0;}
.fle_p2{color: #222222;}
</style>