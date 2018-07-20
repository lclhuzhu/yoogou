<template>
	<div class="fortune">
		<div class="" v-for="item in 4">
			<p class="top_p">七月收益情况</p>
			<div class="top_box">
				<div class="top_com">
					<p class="date_p1">第五周</p>
					<p class="date_p2">6666</p>
				</div>
				<div class="top_com">
					<p class="date_p1">第四周</p>
					<p class="date_p2">6666</p>
				</div>
				<div class="top_com">
					<p class="date_p1">第三周</p>
					<p class="date_p2">6666</p>
				</div>
				<div class="top_com">
					<p class="date_p1">第二周</p>
					<p class="date_p2">6666</p>
				</div>
				<div class="top_com">
					<p class="date_p1">第一周</p>
					<p class="date_p2">6666</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'fortune'
	})
</script>

<style scoped>
.top_p{color: #999999;padding: .1rem .3rem;}
.top_box{width: 100%;height: 4rem;background: #FFFFFF;display: flex;flex-direction: column;justify-content: space-between;padding: .36rem .3rem;}
.top_com{display: flex;justify-content: space-between;width: 100%;}
.date_p1{color: #999999;}
.date_p2{color: #222222;;}
</style>