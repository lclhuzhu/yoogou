<template>
	<div class="customer">
		<van-nav-bar title="客服列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between_v" v-for="item in list" :key='item.id'>
			<p class="list_p1">{{item.number}}号客服 {{ item.name }}</p>
			<p class="list_p2">微信号：{{ item.wechat }}</p>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'customer',
		data () {
			return {
				list: []
			}
		},
		created () {
			this.getList()
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    //获取列表
		    getList () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/appUser/getCustomer',
		       		method: 'GET'
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.list = res.data.data
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    }
		}
	})
</script>

<style scoped>
.flex_between_v{width: 100%;height: 1.2rem;padding: 0 .3rem;border-bottom: 2px solid #E5E5E5;background: #fff;}
.flex_between_v:last-child{border: 0;}
.list_p1{color: #666666;}
.list_p2{color: #222222;}
.van-nav-bar{position: fixed;top: 0;width: 100%;}
</style>