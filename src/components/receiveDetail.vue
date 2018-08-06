<template>
    <div class="receiveDetail">
     	 <van-nav-bar title="收款详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
      	<div class="details">
   		 	<ul class="dingdan">
         		 <li class="state">{{ subOrderNo }}</li>
          		<li class="money dingdan-right-li">¥{{ price }}</li>
        	</ul>
        	<ul class="middle" style="border: 0;">
			 	<li class="state">应付区块链币:</li>
		        <li class="money dingdan-right-li">{{ bite }}</li>
        	</ul>
        	<ul class="middle">
			 	<li class="state">付款钱包地址</li>
		        <li class="money dingdan-right-li">{{ walletAddress }}</li>
        	</ul>
	        <ul class="ul-img" v-if="img.length != 0">
	          	<li v-for="(item, index) in img" :key='index'><img class="div-img" :src="item" /></li>
	        </ul>
    	</div>
      	<div class="bottom">
        	<ul class="button-ul">
          		<li class="left-li" @click="subnone">确认未收到足够款项</li>
          		<li class="right-li" @click="subhave">确认已收款</li>
        	</ul>
      	</div>
      	<!--已收款弹框-->
        <van-popup v-model="isShow" :close-on-click-overlay = "true">
	        <div class="pop-bottm">
	            <span class="title">提示</span>
	            <div class="line"></div>
	            <p class="pop-p1">确认后将无法撤销，请确实该笔</p>
	            <p class="pop-p2">交易已收款！</p>
	            <ul>
	                <li class="delay" @click="sunSale">确认</li>
	                <li class="will-pay" @click="isShow = false">取消</li>
	            </ul>
	        </div>
        </van-popup>
        <!--未收款弹框-->
        <van-popup v-model="isShowb" :close-on-click-overlay = "true">
	        <div class="pop-bottm">
	            <span class="title">提示</span>
	            <div class="line"></div>
	            <p class="pop-p1">确认后将无法撤销，请确实该笔</p>
	            <p class="pop-p2">交易未收到足额款项！</p>
	            <ul>
	                <li class="delay" @click="sunSale">确认</li>
	                <li class="will-pay" @click="isShowb = false">取消</li>
	            </ul>
	        </div>
        </van-popup>
        <pass :source='source' :orderId='orderId' :type='type' ref="c1" @change='change'></pass>
    </div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
    export default {
	    name: "receiveDetail",
	  	data() {
	      	return {
	        	isShow: false,
	        	isShowb: false,
	        	subOrderNo: 0,
	        	price: 0,
	        	walletAddress: 0,
	        	img:[],
	        	source: 4,
	        	orderId: 0,
	        	type: 0 || 1,				//0支付不成功   1成功
	        	bite: 0,					//区块链币
	    	}
		},
		created () {
			this.orderId = this.$route.query.orderId
			this.getdeatil()
		},
	    methods: {
	        onClickLeft () {
	          	history.go(-1);
	        },
	        //获取列表
		    getdeatil () {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/presaleOrder/getMatchingOrderInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		orderId: that.$route.query.orderId
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.subOrderNo = res.data.data.subOrderNo
			        	that.price = res.data.data.price
			        	that.walletAddress = res.data.data.walletAddress
			        	that.img = res.data.data.img
			        	that.bite = res.data.data.coinPrice
			        } else {
			        	Toast(res.data.msg)
			        }
		      	})
		    },
		    //未收款
		    subnone () {
		    	let that = this
		    	that.isShowb = true
		    	that.type = 0		    	
		    },
		    //已收款
		    subhave () {
		    	let that = this
		    	that.isShow = true
		    	that.type = 1
		    },
		    //调用二级密码组件方法
		    sunSale () {
		    	let that = this
		    	that.isShowb = false
		    	that.isShow = false
		    	//调用二级密码组件方法
        		that.$refs.c1.check()
		    },
		    //跳转积分记录
		    change () {
		    	this.$router.push({path:'/IntegralDealList'})
		    }
	    },
	    components : {
	    	pass
	    }
    }
</script>

<style scoped>
  ul li{ width: 50%; height: 100%; display: inline-block; float: left; box-sizing: border-box;}
  .details{ width: 100%; background-color: #FFFFFF; padding: 0rem 0.3rem;}
  .dingdan{ width: 100%;height: 0.6rem; line-height: 0.6rem; border-bottom: 2px dashed #DDDDDD;}
  .dingdan-right-li{text-align: right;}
  .middle {height: 1.0rem; line-height: 1.0rem; border-bottom: 2px dashed #DDDDDD;}
  .div-img {width: 1.6rem; height: 1.6rem; }
  .ul-img {height: 4rem; padding-top: .4rem}
  .ul-img li {width: 30%; height: 100%; display: inline-block; float: left; box-sizing: border-box;}
  .bottom {width: 100%; height: 1.4rem; background-color: white; text-align: center; position: fixed; left: 0; bottom: 0;}
  .button-ul {width: 100%; height: 1.4rem; text-align: center; padding-left: .30rem; padding-top: .28rem }
  .left-li {width: 3.4rem; height: .88rem; line-height: .88rem; font-size: .28rem; color: #FF6D0C; border-radius: .44rem; border: 1px solid #FF6D0C}
.right-li {width: 3.2rem; height: .88rem; line-height: .88rem; font-size: .28rem; color: #FFFFFF; border-radius: .44rem; background: linear-gradient(left, #FF9400, #FF6808); margin-left: .30rem}
  .pop-bottm { text-align: center; padding-top: .30rem;}
  .van-popup { width: 6.3rem; height: 3.9rem; margin: 0 auto; border-radius: 12px;}
  .line {width: 6.3rem; height: 1px; background-color: #DDDDDD; margin-top: .25rem}
  .will-pay {width: 2.4rem; height: .8rem; line-height: .8rem; color: #FF6D0C; font-size: .32rem; border: 1px solid #FF6D0C; border-radius: .44rem; margin-left: .48rem; margin-top: .46rem}
  .delay {width: 2.4rem; height: .8rem; line-height: .8rem; color: white; font-size: .32rem; background: linear-gradient(left, #FF9400, #FF6808 ); border-radius: .44rem; margin-left: .52rem; margin-top: .46rem}
.pop-p1 {margin-top: .58rem}
</style>
