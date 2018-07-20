<template>
<div class="buyOrderDetails">
	<van-nav-bar title="买入订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
	<div class="list-single">
		<div class="details">
			<ul class="dingdan">
				<li class="state">订单号</li>
				<li class="money dingdan-right-li">111111</li>
			</ul>
			<ul class="price">
				<li class="state">购买积分价格</li>
				<li class="money"><i>$</i>200</li>
			</ul>
			<ul class="await">
				<li class="state">预付款</li>
				<li class="money"><i>$</i>200<span class="right">欠着</span></li>
			</ul>
			<ul class="tail">
				<li class="state">尾款</li>
				<li class="money"><i>$</i>20<span class="right">不给了</span></li>
			</ul>
		</div>
	</div>
	<!--<div class="rocord-time">-->
		<!--<ul>-->
			<!--<li class="operation">客服人员介入</li>-->
			<!--<li class="time">211:11:55:01</li>-->
		<!--</ul>-->
	<!--</div>-->

  <div class="lists">
    <div class="item-recode">
      <ul class="item">
        <li class="status">已排单，排单金额2000.00</li>
        <li class="time">111</li>
      </ul>
      <ul class="item">
        <li class="status">预付款匹配到支付对象</li>
        <li class="time">222</li>
      </ul>
      <ul class="item">
        <li class="status">买家确认未收到</li>
        <li class="time">333</li>
      </ul>
      <ul class="item">
        <li class="status">已排单，排单金额2000.00</li>
        <li class="time">444</li>
      </ul>
      <ul class="item">
        <li class="status">预付款匹配到支付对象</li>
        <li class="time">2018-07-01 08:00:00</li>
      </ul>
      <ul class="item">
        <li class="status">已排单，排单金额2000.00</li>
        <li class="time">444</li>
      </ul>
      <ul class="item">
        <li class="status">预付款匹配到支付对象</li>
        <li class="time">2018-07-01 08:00:00</li>
      </ul>
      <ul class="item">
        <li class="status">已排单，排单金额2000.00</li>
        <li class="time">444</li>
      </ul>
      <ul class="item">
        <li class="status">预付款匹配到支付对象</li>
        <li class="time">2018-07-01 08:00:00</li>
      </ul>
      <ul class="item">
        <li class="status">已排单，排单金额2000.00</li>
        <li class="time">2018-07-01 08:00:00</li>
      </ul>
    </div>
  </div>

  <!--弹框-->
  <van-popup v-model="isShow" :close-on-click-overlay = "true">
    <div class="pop-bottm">
      <span class="title">提示</span>
      <div class="line"></div>

      <!--<router-link>-->
        <!--<div class="will-pay ">预付款</div>-->
      <!--</router-link>-->

      <!--<router-link to="/IntegralDealList">-->
        <!--<div class="delay">-->
          <!--尾款-->
        <!--</div>-->
      <!--</router-link>-->
      <ul>
        <router-link to="/willPayList">
          <li class="will-pay">预付款</li>
        </router-link>

        <router-link to="">
          <li class="delay">尾款</li>
        </router-link>

      </ul>

    </div>
  </van-popup>
	<div class="btn">
		<button @click="isShow = true">上传凭证</button>
	</div>
</div>

</template>

<script>
	export default {
		name: 'buyOrderDetails',
		data() {
			return {
            isShow: false,
        	}
		},
		methods: {
		    onClickLeft() {
		      	history.go(-1)
		    },

		    uploading(){

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
.right{
	position: absolute;
	right: 0.3rem;
	font-size: 0.28rem;
}
.time{
	/*color: ;*/
	text-align: right;
}
.status{
	background-color: #FFFFFF;
}

.list-single{
	height: 2.9rem;
	width: 100%;
	box-sizing: border-box;
	margin-top: 0.2rem;
}
.details{
	width: 100%;
	height: 2.9rem;
	background-color: #FFFFFF;
	padding: 0rem 0.3rem;
  border-bottom: 2px dashed #DDDDDD;
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
}
/*======时间========*/
.rocord-time{
	height: 6.8rem;
	background-color: #FFFFFF;
	box-sizing: border-box;
	padding: 0 0.3rem;
	border-top: 1px dashed #FDFDFD;
}
.btn{
	height: 1.4rem;
	width: 100%;
	position: fixed;
	bottom: 0px;
	background-color: #FFFFFF;
  padding-top: .25rem;
}
.btn button{
	width: 6.5rem;
	height: 0.88rem;
	background: linear-gradient(left,#FF9400,#FF6808 );
	margin: 0 auto;
	border-radius: 0.88rem;
	text-align: center;
	color: #FFFFFF;
	border: none;
  position: absolute;
  top: .2rem;
  left: .5rem;
}
  .lists {height: 100%; background-color: white; padding: 0rem .3rem;}
  .item {height: .7rem; line-height: .7rem;}
.van-popup {
  width: 6.3rem;
  height: 3.4rem;
  margin: 0 auto;
  border-radius: 12px;
}
.pop-bottm {
  text-align: center;
  padding-top: .30rem;
}
.title {font-size: .36rem; color: #222222;}
.line {width: 6.3rem; height: 1px; background-color: #DDDDDD; margin-top: .25rem}
  .will-pay {width: 2.4rem; height: .8rem; line-height: .8rem; color: #FF6D0C; font-size: .32rem; border: 1px solid #FF6D0C; border-radius: .44rem; margin-left: .48rem; margin-top: .6rem}
  .delay {width: 2.4rem; height: .8rem; line-height: .8rem; color: white; font-size: .32rem; background: linear-gradient(left, #FF9400, #FF6808 ); border-radius: .44rem; margin-left: .52rem; margin-top: .6rem}
</style>
