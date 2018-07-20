<template>
	<div class="saleOrderDetails">
		<van-nav-bar title="卖出订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="list-single">
      <div class="details">
        <ul class="dingdan">
          <li class="state">订单号</li>
          <li class="money dingdan-right-li">111111</li>
        </ul>

        <ul class="middle">
        <li class="state">卖出积分商品价值合计</li>
        <li class="money dingdan-right-li">3842378432</li>
        </ul>

        <router-link to="/ReceiveDetail">
          <div class="content" v-for="item in 3">
            <ul class="price">
              <li class="state">b2018070100001-001</li>
              <li class="money dingdan-right-li"><i>¥</i>3000</li>
            </ul>
            <ul class="await">
              <li class="state">付款钱包地址</li>
              <li class="money dingdan-right-li color">已支付</li>
            </ul>
            <ul class="tail">
              <li class="state">DGDSGFHFDfgfsfsd</li>
            </ul>
          </div>
        </router-link>

      </div>
    </div>

    </div>
</template>

<script>
	export default {
		name: 'buyOrderDetails',

		methods: {
		    onClickLeft() {
		      	history.go(-1)
		    },

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
