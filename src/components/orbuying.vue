<template>
	<div class="orbuying">
		<van-nav-bar title="预约买入" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<van-radio-group v-model="radio">
		    <van-cell-group>
		   		<van-cell title="8天一单" clickable @click="radio = '4'">
		      		<van-radio name="4" />
			    </van-cell>
			    <van-cell title="9天一单" clickable @click="radio = '5'">
			      	<van-radio name="5" />
			    </van-cell>
			    <van-cell title="10天一单" clickable @click="radio = '6'">
		      		<van-radio name="6" />
			    </van-cell>
			    <van-cell title="11天一单" clickable @click="radio = '7'">
			      	<van-radio name="7" />
			    </van-cell>
			    <van-cell title="12天一单" clickable @click="radio = '8'">
		      		<van-radio name="8" />
			    </van-cell>
			    <van-cell title="不使用" clickable @click="radio = '0'">
			      	<van-radio name="0" />
			    </van-cell>
		  	</van-cell-group>
		</van-radio-group>
		<div class="peo_bom">
			<div class="sub" v-if="radio" @click="subuy">
				保存
			</div>
			<div class="sub opt4" v-else>
				保存
			</div>
		</div>
		<pass :source='source' :autoType='radio' ref="c1"></pass>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
	export default({
		name: 'orbuying',
		data () {
			return {
				radio: '0',				//选择类型
				status: null,			//是否设置二级密码   0设置   -1未设置
				source: 0
			}
		},
		created () {
			this.getbuy()
		},		
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //获取状态
		    getbuy () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/automaticOrder/getAutoBuyType',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.radio = res.data.data.toString()
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //调用二级密码组件方法
		    subuy () {
        		this.$refs.c1.check()
		    }		    
		},
		components: {
			pass
		}
	})
</script>

<style scoped>
.opt4{opacity: .4;}
/*保存*/
.peo_bom{background: #FFFFFF;position: absolute;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
</style>