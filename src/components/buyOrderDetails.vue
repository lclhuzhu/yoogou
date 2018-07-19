<template>
<div class="buyOrderDetails">
	<van-nav-bar title="买入订单" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
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
	<div class="rocord-time">
		<ul>
			<li class="operation">客服人员介入</li>
			<li class="time">211:11:55:01</li>
		</ul>
	</div>
	<div class="btn">
		<button @click="uploading">上传凭证</button>
	</div>
</div>

</template>

<script>
	export default {
		name: 'buyOrderDetails',
		data() {
			return {
            
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
}
.btn button{
	width: 6.5rem;
	height: 0.88rem;
	background: linear-gradient(left,#FF9400,#FF6808 );
	margin: 0 auto;margin-top: 0.26rem;
	border-radius: 0.88rem;
	text-align: center;
	color: #FFFFFF;
	border: none;
}
</style>