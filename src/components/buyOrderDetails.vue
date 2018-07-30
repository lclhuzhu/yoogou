<template>
<div class="buyOrderDetails">
	<van-nav-bar title="买入订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
	<div class="list-single">
		<div class="details">
			<ul class="dingdan">
				<li class="state">订单号</li>
				<li class="money dingdan-right-li">{{orderDetail.prebuyOrderNo}}</li>
			</ul>
			<ul class="price">
				<li class="state">购买积分价格</li>
				<li class="money">￥{{orderDetail.price}}</li>
			</ul>
			<ul class="await">
				<li class="state">预付款</li>
				<li class="money">￥{{orderDetail.firstPrice}}<span class="right" :style="{color:getStatusColor(orderDetail.firstStatus)}">{{getStatusStr(orderDetail.firstStatus)}}</span></li>
			</ul>
			<ul class="tail">
				<li class="state">尾款</li>
				<li class="money">￥{{orderDetail.endPrice}}<span  class="right" :style="{color:getStatusColor(orderDetail.endStatus)}">{{getStatusStr(orderDetail.endStatus)}}</span></li>
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
    <div class="item-recode" v-for="(item,idx) in operations" :key="idx">
      <ul class="item" >
        <li class="status">{{item.handle}}</li>
        <li class="time">{{item.handleTime}}</li>
      </ul>
    </div>
  </div>

  <!--弹框-->
  <van-popup v-model="isShow" :close-on-click-overlay = "true">
    <div class="pop-bottm">
      <span class="title">提示</span>
      <div class="line"></div>
      <ul>
        <router-link :to="{path:'/willPayList',query:{id:orderDetail.id,type:'0'}}">
          <li class="will-pay">预付款</li>
        </router-link>

        <router-link :to="{path:'/willPayList',query:{id:orderDetail.id,type:'1'}}">
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
import { Toast } from 'vant'
export default {
  name: 'buyOrderDetails',
  data() {
    return {
      isShow: false,
      orderDetail: {},
      operations: [],
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.queryOrderDetail(id)
    this.queryOrderOperations(id)
  },
  computed:{
    orderId() {
      return this.$route.query.id;
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1)
    },
    getStatusColor(status) {
      if ('0' == status) {
        return '#FF6D0C'
      } else if ('1' == status) {
        return '#11B740'
      } else if ('2' == status) {
        return '#FF6D0C'
      } else if ('3' == status) {
        return '#FF6D0C'
      } else if ('4' == status) {
        return '#FF6D0C'
      } else if ('5' == status) {
        return '#FF6D0C'
      } else if ('6' == status) {
        return '#FF6D0C'
      }
      return '#FF6D0C'
    },
    getStatusStr(status) {
      if ('0' == status) {
        return '匹配中'
      } else if ('1' == status) {
        return '待支付'
      } else if ('2' == status) {
        return '已支付'
      } else if ('3' == status) {
        return '确认已支付'
      } else if ('4' == status) {
        return '确认未支付'
      } else if ('5' == status) {
        return '卖方超时未确认'
      } else if ('6' == status) {
        return '买方超时未支付'
      }
      return status
    },
    uploading() {},
    // 查询订单详情
    queryOrderDetail(id) {
      this.$axios({
        url: '/api/app/prebuyOrder/getPrebuyOrder',
        method: 'POST',
        data: JSON.stringify({
          orderId: id
        })
      }).then(res => {
        if (res.data.code == 0) {
          this.orderDetail = res.data.data
        } else {
          Toast(res.data.msg || '查询失败')
        }
      })
    },
    //查询订单操作记录
    queryOrderOperations(id) {
      this.$axios({
        url: '/api/app/prebuyOrder/getPrebuyOrderOperation',
        method: 'POST',
        data: JSON.stringify({
          orderId: id
        })
      }).then(res => {
        if (res.data.code == 0) {
          this.operations = res.data.data
        } else {
          Toast(res.data.msg || '查询失败')
        }
      })
    }
  }
}
</script>

<style scoped>
ul li {
  width: 50%;
  height: 100%;
  display: inline-block;
  float: left;
  box-sizing: border-box;
}
.right {
  position: absolute;
  right: 0.3rem;
  font-size: 0.28rem;
}
.time {
  /*color: ;*/
  text-align: right;
  font-size: 0.24rem;
  color: #222222;
}
.status {
  background-color: #ffffff;
  font-size: 0.24rem;
  color: #999999;
}

.list-single {
  height: 2.9rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.2rem;
}
.details {
  width: 100%;
  height: 2.9rem;
  background-color: #ffffff;
  padding: 0rem 0.3rem;
  border-bottom: 2px dashed #dddddd;
}
.dingdan {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 2px dashed #dddddd;
}
.dingdan-right-li {
  text-align: right;
}
.price {
  height: 0.7rem;
  line-height: 0.7rem;
}
.await {
  height: 0.56rem;
  line-height: 0.56rem;
}
.tail {
  height: 0.56rem;
  line-height: 0.56rem;
}
/*======时间========*/
.rocord-time {
  height: 6.8rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 0.3rem;
  border-top: 1px dashed #fdfdfd;
}
.btn {
  height: 1.4rem;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
  padding-top: 0.25rem;
}
.btn button {
  width: 6.5rem;
  height: 0.88rem;
  background: linear-gradient(left, #ff9400, #ff6808);
  margin: 0 auto;
  border-radius: 0.88rem;
  text-align: center;
  color: #ffffff;
  border: none;
  position: absolute;
  top: 0.2rem;
  left: 0.5rem;
}
.lists {
  height: 100%;
  background-color: white;
  padding: 0rem 0.3rem;
}
.item {
  height: 0.7rem;
  line-height: 0.7rem;
}
.van-popup {
  width: 6.3rem;
  height: 3.4rem;
  margin: 0 auto;
  border-radius: 12px;
}
.pop-bottm {
  text-align: center;
  padding-top: 0.3rem;
}
.title {
  font-size: 0.36rem;
  color: #222222;
}
.line {
  width: 6.3rem;
  height: 1px;
  background-color: #dddddd;
  margin-top: 0.25rem;
}
.will-pay {
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #ff6d0c;
  font-size: 0.32rem;
  border: 1px solid #ff6d0c;
  border-radius: 0.44rem;
  margin-left: 0.48rem;
  margin-top: 0.6rem;
}
.delay {
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.32rem;
  background: linear-gradient(left, #ff9400, #ff6808);
  border-radius: 0.44rem;
  margin-left: 0.52rem;
  margin-top: 0.6rem;
}
</style>
