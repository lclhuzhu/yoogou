<template>
	<div class="myIntegral">
		<van-nav-bar title="积分" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between_v bor1">
			<p>托管本账号</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
		<div class="flex_between_v" @click="tolink">
			<p>查看被托管人账户</p>
			<img src="@/assets/commone_btn_in@2x.png" class="right_img"/>
		</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1" v-if="0">暂无被托管人</p>
			<p class="pop_p1">您的账户已托管至您的直接推荐人！</p>
		</van-popup>
		<!--弹出框-->
		<van-popup v-model="tgshow">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">确认取消托管账户？</p>
			<div class="flex_center">
				<p class="pop_p2" @click="tgshow = false">确认</p>
				<p class="pop_p3" @click="tgshow = false">取消</p>				
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default({
		name: 'myIntegral',
		data () {
			return {
				show: false,
				tgshow: true
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //进入积分
		    tolink () {
		    	this.$router.push({path:'/integral'})
		    }
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;background: #FFFFFF;box-sizing: border-box;}
.bor1{border-bottom: 2px solid #E5E5E5;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>