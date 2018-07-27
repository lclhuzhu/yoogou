<template>
	<div class="container1 saleorder">
		<van-nav-bar title="选择卖出订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<van-tabs v-model="active">
			<van-tab v-for="item in nav" :title="item" :key='item'>
			</van-tab>
		</van-tabs>
		<van-radio-group v-model="radio">
		  	<van-radio name="item" v-for='item in list' :key='item.id'>
		  		<div class="radio_d1 flex_between_v">
		  			<p>b2018071500001</p>
		  			<p class="col19b">可卖出</p>
		  		</div>
		  		<div class="radio_d2">
		  			<div class="flex_between_v">
			  			<p>买入时商品价值</p>
			  			<p class="col222">{{ item.price }}</p>
			  		</div>
			  		<div class="flex_between_v matop1">
			  			<p>当前商品价值</p>
			  			<p class="col222">{{ item.salePrice }}</p>
			  		</div>
			  		<div class="flex_between_v matop1">
			  			<p>买入时间</p>
			  			<p class="col222">{{ item.interestBeginTime }}</p>
			  		</div>
		  		</div>
		  	</van-radio>
		</van-radio-group>
		<div class="peo_bom">
			<div class="sub">
			卖出该商品
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'container1',
		data () {
			return {
				nav: ['可卖出', '交易中', '已卖出'],
				active: 0,
				radio: '',
				list: []
			}
		},
		created () {
			this.getlist()
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		    getlist () {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/presale/getSaleItems',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId: 6
		        	})
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
.opt4{opacity: .4;}
.saleorder{padding-top: .88rem;padding-bottom: 1.5rem;}
.radio_d1{width: 100%;height: .68rem; border-bottom: 1px solid #E5E5E5;padding-left: .6rem;}
.radio_d2{padding: .26rem 0 .26rem .6rem;}
.matop1{margin-top: .1rem;}
.col222{color: #222222;}
.col19b{color: #19BA46;}
.colffb{color: #FFB100;}
.colff6{color: #FF6A08;}
</style>