<template>
	<div class="saleOrderDetails">
		<van-nav-bar title="卖出订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="list-single">
				<ul class="dingdan">
					<li class="state">订单号</li>
					<li class="money dingdan-right-li">111111</li>
				</ul>
				<ul class="total">
					<li class="state">卖出积分商品</li>
					<li class="money">55555</li>
				</ul>
				<div class="">
					<ul class="price">
						<li class="state">购买积分价格</li>
						<li class="money"><i>$</i>200</li>
					</ul>
					<ul class="status">
						<li class="state">卖出状态</li>
						<li class="money"><i>$</i>200<span>匹配中</span></li>
					</ul>
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
.state{
	color: #999999;
}
.right{
	position: absolute;
	right: 0.3rem;
	font-size: 0.28rem;
}
.time{
	color: ;
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
	height: 100%;
	background-color: #FFFFFF;
	padding: 0rem 0.3rem;
}
.dingdan{
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	border-bottom: 1px solid #888888;
}
.dingdan-right-li{
	text-align: right;
}
.price{
	height: 0.7rem;
	line-height: 0.7rem;
}
.total{
	height: 1.04rem;
	line-height: 1.04rem;
}
.await{
	height: 0.56rem;
	line-height: 0.56rem;
}
.tail{
	height: 0.56rem;
	line-height: 0.56rem;
}
.status span{
	position: absolute;
	right: 0.3rem;
	font-size: 0.28rem;

}
</style>