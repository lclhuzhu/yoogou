<template>
	<div class="wallet">
		<van-nav-bar title="钱包地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="wal_list flex_between_v" v-for="item in list" :key='item.id'>
			<div class="">
				<p class="wal_p0">钱包地址</p>
				<p class="wal_p1">{{ item.address }}</p>
			</div>
			<div class="">
				<p v-if="item.isDefault != 1" class="wal_p2 flex_between_v" @click="defaul(item.id)"><img src="@/assets/mr@2x.png"/>设为默认</p>
				<p class="wal_p3" @click="delpop(item.id)">删除</p>
			</div>
		</div>
		<div class="ws" v-if="list.length == 0">
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
				<p class="pop_p2" @click="delsub">确认</p>
				<p class="pop_p3" @click="show = false">取消</p>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'wallet',
		data () {
			return {
				show: false,					//弹窗
				list: [],						//地址列表
				id: ''							//地址id
			}
		},
		created () {
			this.addsub()
		},
		methods: {
			//返回
		    onClickLeft () {
		        this.$router.push({path:'/mine'})
		    },
		    //获取列表
		    addsub () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/walletAddress/getWalletAddress',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	that.list = res.data.data
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //设为默认
		    defaul (e) {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/walletAddress/setDefaultWalletAddress',
		       		method: 'POST',
		        	data: qs.stringify({
		        		id: e,
		          		userId: localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	Toast(res.data.msg)
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //删除弹窗
		    delpop (e) {
		    	this.id = e
		    	this.show = true
		    },
		    //删除
		    delsub () {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/walletAddress/deleteWalletAddress',
		       		method: 'POST',
		        	data: qs.stringify({
		        		id: that.id
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			          	Toast(res.data.msg)
			          	that.addsub()
			          	that.show = false
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
.ws{text-align: center;}
.ws p{color: #888888;}
.wallet{padding-bottom: 1.14rem;}
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