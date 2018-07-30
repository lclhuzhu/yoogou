<template>
	<div class="saleOrderDetails">
		<van-nav-bar title="卖出订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
	    <div class="list-single">
	      	<div class="details">
		        <ul class="dingdan">
		          	<li class="state">订单号</li>
		          	<li class="money dingdan-right-li">{{ No }}</li>
		        </ul>
		        <ul class="middle">
			        <li class="state">卖出积分商品价值合计</li>
			        <li class="money dingdan-right-li">￥ {{ salePrice }}</li>
		        </ul>
	          	<div class="content" v-for="item in list" :key='item.id' @click="Detail(item.status,item.id)">
	            	<ul class="price">
	              		<li class="state">{{ item.subOrderNo }}</li>
	              		<li class="money dingdan-right-li">￥ {{ item.price }}</li>
	            	</ul>
	            	<ul class="await">
	              		<li class="state">付款钱包地址</li>
	              		<li class="money dingdan-right-li colffb" v-if="item.status == 0">匹配中</li>
	              		<li class="money dingdan-right-li color" v-if="item.status == 1">待支付</li>
	              		<li class="money dingdan-right-li colffb" v-if="item.status == 2">确认支付</li>
	              		<li class="money dingdan-right-li colffb" v-if="item.status == 3">确认未付款</li>
	              		<li class="money dingdan-right-li colffb" v-if="item.status == 4">卖方超时未确认</li>
	              		<li class="money dingdan-right-li colffb" v-if="item.status == 5">买方超时未支付</li>
	            	</ul>
	            	<ul class="tail">
	              		<li class="state">{{ item.walletAddress }}</li>
	            	</ul>
	          	</div>
	       </div>
		</div>
    </div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default {
		name: 'buyOrderDetails',
		data () {
			return {
				salePrice: '',					//总价
				No:'',							//订单号
				list: [],						//订单列表
			}
		},
		created () {
			this.No = this.$route.query.No
			this.getorder()
		},
		methods: {
			//返回
		    onClickLeft() {
		      	history.go(-1)
		    },
		    //获取订单
			getorder () {
				let that = this
		        that.$axios({
		      	  	url: '/api/app/presaleOrder/getMatchingOrder',
		       		method: 'POST',
		        	data: qs.stringify({
		          		orderId: that.$route.query.orderId
		        	})
		      	}).then(res => {
		      		that.salePrice = res.data.data[0].salePrice
			        if (res.data.code == 0) {
			        	that.list = res.data.data
			        } else {
			        	Toast(res.data.msg)
			        }
		      	})
			},
			//产看详情
			Detail (status,e) {
				if (status != 0 && status != 3 ) {
					this.$router.push({path:'/ReceiveDetail',query:{orderId:e}})					
				}
			}
	  	}
	}
</script>

<style scoped>
ul li{
	width: 50%;
	height: 100%;
	display: inline-block;
	float: left;
	box-sizing: border-box;
}
.saleOrderDetails {width: 100%; height: 100%}
.list-single{
	height: 100%;
	width: 100%;
	box-sizing: border-box;
  /*padding-left: .30rem;*/
  /*padding-right: .30rem;*/
  background-color: #FFFFFF;
}
.details{
  width: 100%;
  height: 2.9rem;
  background-color: #FFFFFF;
  padding: 0rem 0.3rem;
}
.dingdan{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 2px dashed #DDDDDD;
}
.dingdan-right-li{
  text-align: right;
}
.color {color: #11B740;}
.colffb {color: #FFB100;}
.price{
  height: 0.7rem;
  line-height: 0.7rem;
}
.await{
  height: 0.56rem;
  line-height: 0.56rem;
}
.tail{
  height: 0.56rem;
  line-height: 0.56rem;
  border-bottom: 2px dashed #DDDDDD;
}
.order {height: .68rem; line-height: .68rem; border-bottom: 1px solid #DDDDDD}
.middle {height: 1rem; line-height: 1rem; border-bottom: 1px dashed #CCCCCC}
.state {color: #999999;}
</style>
