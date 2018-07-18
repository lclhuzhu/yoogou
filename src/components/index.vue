<template>
	<div class="index">
		<div class="bottom">
			<ul>
				<li><router-link to='/home'><div class="bottom-img"><img src="../../build/logo.png"/></div>首页</router-link></li>
				<li><router-link to='/integral'><div class="bottom-img"><img src="../../build/logo.png"/></div>积分</router-link></li>
				<li><router-link to='/shopcar'><div class="bottom-img"><img src="../../build/logo.png"/></div>购物车</router-link></li>
				<li><router-link to='/mine'><div class="bottom-img"><img src="../../build/logo.png"/></div>我的</router-link></li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default({
		data() {
		    return {
//		      images: [];
    		}
  		},
		methods: {
		    onChange(index) {
		      Toast('当前 Swipe 索引：' + index);
    		}
  		}
	})
</script>

<style scoped>
	
	.bottom{
		height: 0.98rem;
		width: 100%;
		position: fixed;
		bottom: 0px;
	}
	.bottom-img{
		width: 0.48rem;
		height: 0.48rem;
		margin: 0 auto;
		margin-top: 0.1rem;
		border: 1px solid #0086B3;
	}
	.bottom-img img{
		width: 100%;
		height: 100%;
	}
	.bottom ul li{
		width: 25%;
		height: 0.96rem;
		background-color: #fff;
		text-align: center;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	
</style>