<template>
	<div class="orselling">
		<van-nav-bar title="预约卖出" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<img class="se_img" src="@/assets/wpic@2x.png" v-if="!enable"/>
		<img class="se_img" src="@/assets/ypic@2x.png" v-if="enable"/>
		<div class="">
			<span class="sp1">当前状态:</span>
			<span class="sp2" v-if="!enable">未开启</span>
			<span class="sp4" v-if="enable">已开启</span>
			<p class="sp3">说明：开启预约卖出后，冻结期变为15（根据<br/>配置的天数+5计数）天，15天后自动卖出。</p>
		</div>
		<div class="peo_bom">
			<div class="sub" @click="enable = !enable" v-if="!enable">
				启用
			</div>
			<div class="sub canle" @click="enable = !enable" v-if="enable">
				取消预约卖出
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:'orselling',
		data () {
			return {
				enable: false
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
.orselling{text-align: center;background: #fff;height: 100%;}
.se_img{margin-top: .6rem;}
.sp1{color: #222222;font-size: .32rem;}
.sp2{color: #101010;font-size: .32rem;}
.sp3{color: #666666;margin-top: .36rem;line-height: .44rem;}
.sp4{color: #FF6F0F;font-size: .32rem;}
.canle{background: #fff;border: 2px solid #FF6F0F;color: #FF6F0F;}
</style>