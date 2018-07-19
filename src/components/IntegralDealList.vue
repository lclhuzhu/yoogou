<template>
	<div class="IntegralDealList">
		<van-nav-bar title="积分交易情况" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<van-tabs v-model="active" @click="onClick">
		  <van-tab v-for="index in 2" :title="'选项 ' + index" :key='index'></van-tab>
		</van-tabs>
		<div class="integral-mairu-list" v-if="checkIndex == 0">
			<router-link to="/buyOrderDetails">
				<div class="list-single">
					<div class="date">
						今天
					</div>
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
							<li class="money"><i>$</i>200<span>欠着</span></li>

						</ul>
						<ul class="tail">
							<li class="state">尾款</li>
							<li class="money"><i>$</i>20<span>不给了</span></li>

						</ul>
					</div>
				</div>
			</router-link>

			<div class="list-single">
				<div class="date">
					今天
				</div>
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
						<li class="money"><i>$</i>200<span>已支付</span></li>

					</ul>
					<ul class="tail">
						<li class="state">尾款</li>
						<li class="money"><i>$</i>20<span>待支付</span></li>

					</ul>
				</div>
			</div>
			<div class="list-single">
				<div class="date">
					今天
				</div>
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
						<li class="money"><i>$</i>200<span>已支付</span></li>

					</ul>
					<ul class="tail">
						<li class="state">尾款</li>
						<li class="money"><i>$</i>20<span>待支付</span></li>

					</ul>
				</div>
			</div>
		</div>
		<div class="integral-maichu-list" v-if="checkIndex == 1">
			<router-link to="/saleOrderDetails">
				<div class="list-single">
					<div class="date">
						今天
					</div>
					<div class="details">
						<ul class="dingdan">
							<li class="state">订单号</li>
							<li class="money dingdan-right-li">111111</li>
						</ul>
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
			</router-link>
			<div class="list-single">
				<div class="date">
					今天
				</div>
				<div class="details">
					<ul class="dingdan">
						<li class="state">订单号</li>
						<li class="money dingdan-right-li">111111</li>
					</ul>
					<ul class="price">
						<li class="state">购买积分价格</li>
						<li class="money"><i>$</i>200</li>
					</ul>
					<ul class="status">
						<li class="state">卖出状态</li>
						<li class="money"><i>$</i>200<span>确认已支付</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"IntegralDealList",
		data() {
		    return {
		      active: 2,
		      title:'',
		      checkIndex:''
		    }
		},
	  	methods: {
		    onClickLeft() {
		      history.go(-1)
		    },
		    onClickRight() {
		      Toast('按钮');
		    },
		    onClick(index, title) {
		       this.checkIndex = index
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

.money{
	color: #000000;
}
.state{
	color: #999999;
}

.integral-mairu-list{
	width: 100%;
	height: 100%;
}
.integral-mairu-list span{
	position: absolute;
	right: 0.3rem;
	font-size: 0.28rem;
}
.integral-maichu-list span{
	position: absolute;
	right: 0.3rem;
	font-size: 0.28rem;
}
.list-single{
	height: 3.5rem;
	width: 100%;
	box-sizing: border-box;

}
.date{
	width: 100%;
	height: 0.6rem;
	border-bottom: 1px solid #E9E9E9;
}
.details{
   background-color: #FFFFFF;
   padding: 0rem 0.3rem;
 }
.dingdan{
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
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
.status{
	height: 0.56rem;
	line-height: 0.56rem;
}
</style>
