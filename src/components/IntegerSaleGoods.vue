<template>
	<div class="container1 saleorder">
		<van-nav-bar title="选择卖出订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<van-radio-group v-model="radio">
		  	<van-radio :name="item.id" v-for='item in list' :key='item.id' v-if='item.status == 1'>
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
		<div class="list_box" v-for='item in list' :key='item.id' v-if='item.status != 1'>
			<div class="radio_d1 flex_between_v">
		  			<p>b2018071500001</p>
		  			<p class="colff6" v-if='item.status == 0'>交易中</p>
		  			<p class="colffb" v-if='item.status == 2'>交易中</p>
		  			<p class="colff6" v-if='item.status == 3'>冻结中</p>
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
		</div>
		<div class="peo_bom" v-if='radio'>
			<div class="sub" @click="sub">
			卖出该商品
			</div>
		</div>
		<pass :source='source' :userOrdersId='userOrdersId' ref="c1" @change='getlist'></pass>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
	export default({
		name: 'container1',
		data () {
			return {
				nav: ['可卖出', '交易中', '已卖出'],
				active: 0,
				radio: '',
				source: 2,
				list: [],
				userOrdersId: ''
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
		    //获取列表
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
		    },
		    //调用二级密码
		    sub () {
	          	let that = this
	          	that.userOrdersId = that.radio
		        //调用二级密码组件方法
        		that.$refs.c1.check()
		    }
		},
		components: {
			pass
		}
	})
</script>

<style scoped>
.opt4{opacity: .4;}
.saleorder{padding-bottom: 1.5rem;}
.radio_d1{width: 100%;height: .68rem; border-bottom: 1px solid #E5E5E5;padding-left: .6rem;}
.radio_d2{padding: .26rem 0 .26rem .6rem;}
.matop1{margin-top: .1rem;}
.col222{color: #222222;}
.col19b{color: #19BA46;}
.colffb{color: #FFB100;}
.colff6{color: #FF6A08;}
.list_box{background: #fff;padding: 0 .3rem;margin-top: .2rem;}
/*.list_box .radio_d1{padding-left: 0;}
.list_box .radio_d2{padding-left: 0;}*/
</style>