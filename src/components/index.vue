<template>
	<div class="index">
		<div class="bottom">
			<ul class="flex_between_v">
				<li class="showa">
					<router-link to='/home' class='linka imgsize'></router-link>
				</li>
				<li class="showb">
					<router-link to='/integral' class='linkb imgsize'></router-link>
				</li>
				<li class="showc">
					<router-link to='/shopcar' class='linkc imgsize'></router-link>
				</li>
				<li class="showd">
					<router-link to='/mine' class='linkd imgsize'></router-link>
				</li>
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
		    linkHome () {
		    	this.$outer.push({path:'/home'})
		    },
		    linkInte () {
		    	this.$outer.push({path:'/integral'})
		    },
		    linkShop () {
		    	this.$outer.push({path:'/shopcar'})
		    },
		    linkMine () {
		    	this.$outer.push({path:'/mine'})
		    },
  		}
	})
</script>

<style scoped>
.index{padding-bottom: .98rem;height: 100%;overflow: hidden;overflow-y: auto;}
.bottom{height: 0.98rem;width: 100%;position: fixed; bottom: 0px; z-index: 999;	background: #fff;box-shadow: 0 -1px 4px 0 rgba(224,224,224,0.30);}
.flex_between_v{height: 100%;}
.flex_between_v li{flex: 1;text-align: center;height: 100%;}
.bottom a{display: inline-block;width: 100%;height: 100%;}
.imgsize{background-size: .44rem .77rem;background-position: 50%;background-repeat: no-repeat;}
.showa .linka{background-image: url(../assets/icon_home_disabled@2x.png);}
.showa .router-link-active{background-image: url(../assets/icon_home_select@2x.png);}
.showb .linkb{background-image: url(../assets/icon_jifen_disabled@2x.png);}
.showb .router-link-active{background-image: url(../assets/icon_jifen_select.png);}
.showc .linkc{background-image: url(../assets/icon_buycar_disabled@2x.png);background-size: .66rem .72rem;}
.showc .router-link-active{background-image: url(../assets/icon_buycar_select@2x.png);background-size: .66rem .72rem;}
.showd .linkd{background-image: url(../assets/icon_my_disabled@2x.png);background-size: .44rem .68rem;}
.showd .router-link-active{background-image: url(../assets/icon_my_select@2x.png);background-size: .44rem .68rem;}
</style>