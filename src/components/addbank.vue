<template>
	<div class="addbank">
		<van-nav-bar title="选择银行" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="top">
			<input type="text" placeholder="请输入所属银行" v-model="bank" />
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="bank" @click="subank">
				保存
			</div>
			<div class="sub opy4" v-else>
				保存
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'addbank',
		data () {
			return {
				bank: ''
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //确定选择
		    subank () {
		    	localStorage.setItem('bank',this.bank)
		    	this.$router.push({path:'/bankAccount'})
		    }
		}
	})
</script>

<style scoped>
.opy4{opacity: .4;}
.top{width: 100%;height: .96rem;background: #fff;padding: .28rem .3rem;}
.top input{border: 0;}
/*保存*/
.peo_bom{background: #FFFFFF;position: absolute;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
</style>