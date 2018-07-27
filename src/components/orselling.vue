<template>
	<div class="orselling">
		<van-nav-bar title="预约卖出" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<img class="se_img" src="@/assets/wpic@2x.png" v-if="enable == 0"/>
		<img class="se_img" src="@/assets/ypic@2x.png" v-if="enable == 1"/>
		<div class="">
			<span class="sp1">当前状态:</span>
			<span class="sp2" v-if="enable == 0">未开启</span>
			<span class="sp4" v-if="enable == 1">已开启</span>
			<p class="sp3">说明：开启预约卖出后，冻结期变为15（根据<br/>配置的天数+5计数）天，15天后自动卖出。</p>
		</div>
		<div class="peo_bom">
			<div class="sub" @click="subuy(1)" v-if="enable == 0">
				启用
			</div>
			<div class="sub canle" @click="subuy(0)" v-if="enable == 1">
				取消预约卖出
			</div>
		</div>
		<pass :source='source' :saleType='saleType' ref="c1" @change='gettype'></pass>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
	export default({
		name:'orselling',
		data () {
			return {
				enable: null,					//是否开启   0未开启 1开启
				saleType: null,
				source: 1,
				passhow: false
			}
		},
		created () {
			this.gettype()
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //判断二级密码
		    subuy (e) {
	          	let that = this
	          	that.saleType = e
		        //调用二级密码组件方法
        		that.$refs.c1.check()
		    },
		    //获取状态
		    gettype () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/automaticOrder/getAutoSaleType',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.enable = res.data.data
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    }
		},
		components: {
			pass
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