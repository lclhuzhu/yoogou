<template>
	<div class="orbuying">
		<van-nav-bar title="预约买入" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<van-radio-group v-model="radio">
		    <van-cell-group>
		   		<van-cell title="8天一单1" clickable @click="radio = '1'">
		      		<van-radio name="1" />
			    </van-cell>
			    <van-cell title="9天一单" clickable @click="radio = '2'">
			      	<van-radio name="2" />
			    </van-cell>
			    <van-cell title="10天一单" clickable @click="radio = '3'">
		      		<van-radio name="3" />
			    </van-cell>
			    <van-cell title="11天一单" clickable @click="radio = '4'">
			      	<van-radio name="4" />
			    </van-cell>
			    <van-cell title="12天一单" clickable @click="radio = '5'">
		      		<van-radio name="5" />
			    </van-cell>
			    <van-cell title="不使用" clickable @click="radio = '6'">
			      	<van-radio name="6" />
			    </van-cell>
		  	</van-cell-group>
		</van-radio-group>
		<div class="peo_bom">
			<div class="sub">
				保存
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'orbuying',
		data () {
			return {
				radio: '1'
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
/*保存*/
.peo_bom{background: #FFFFFF;position: absolute;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
</style>