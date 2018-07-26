<template>
	<div class="addwallet">
		<van-nav-bar title="添加钱包地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="add_div">
			<p>请填写您的钱包地址：</p>
			<input type="text" name="" id="" value="" v-model="address"/>
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="address" @click="addsub">
				保存
			</div>
			<div class="sub opy4" v-else>
				保存
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'addwallet',
		data () {
			return {
				address:''
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        this.$router.push({path:'/wallet'})
		    },
		    //保存
		    addsub () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/walletAddress/setWalletAddress',
		       		method: 'POST',
		        	data: qs.stringify({
		          		address: that.address,
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	Toast(res.data.msg)
			          	that.$router.push({path:'/wallet'})
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    }
		}
	})
</script>

<style scoped>
.opy4{opacity: .4;}
.peo_bom{background: #FFFFFF;position: fixed;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
.add_div{width: 100%;padding: .5rem .3rem;background: #FFFFFF;}
.add_div p{color: #666666;font-size: .32rem;margin-bottom: .3rem;}
.add_div input{border: 2px solid #E9E9E9;border-radius: 40px;width: 100%;height: .8rem;padding: .2rem;box-sizing: border-box;}
</style>