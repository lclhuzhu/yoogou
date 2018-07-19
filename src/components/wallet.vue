<template>
	<div class="wallet">
		<van-nav-bar title="钱包地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="wal_list flex_between_v" v-for="item in 8" v-if="0">
			<div class="">
				<p class="wal_p0">钱包地址</p>
				<p class="wal_p1">DGDSGFHFDfgfsfsd</p>
			</div>
			<div class="">
				<p class="wal_p2 flex_between_v"><img src="@/assets/mr@2x.png"/>设为默认</p>
				<p class="wal_p3">删除</p>
			</div>
		</div>
		<div class="ws">
			<img src="../assets/ws@2x.png"/>
			<p>您还未配置钱包地址</p>
		</div>
		<div class="peo_bom">
			<router-link to='/addwallet' class="sub">
				添加钱包地址
			</router-link>
		</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">确认删除？</p>
			<div class="flex_center">
				<p class="pop_p2" @click="show = false">确认</p>
				<p class="pop_p3" @click="show = false">取消</p>
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default({
		name: 'wallet',
		data () {
			return {
				show: true,					//弹窗
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
.opy4{opacity: .4;}
.ws{text-align: center;}
.ws p{color: #888888;}
.wallet{padding-bottom: 1.14rem;padding-top: .88rem;}
.peo_bom{background: #FFFFFF;position: fixed;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;display: inline-block;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
.wal_list{width: 100%;height: 1.6rem;background: #FFFFFF;border-bottom: 2px solid #E5E5E5;padding: 0 .3rem;}
.wal_list:last-child{border: 0;}
.wal_p0{color: #999999;margin-bottom: .1rem;}
.wal_p1{color: #999999;}
.wal_p2{font-size: .24rem;color: #FF6A08;width: 1.3rem;margin-bottom: .1rem;}
.wal_p3{width: 1.4rem;height: .6rem;line-height: .6rem; text-align: center;color: #fff;background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>