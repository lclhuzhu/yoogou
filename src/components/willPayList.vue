<template>
  <div class="willPayList">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="details">
      <ul class="dingdan">
        <li class="state">合计</li>
        <li class="money order-right-li">{{'￥'+totalPrice}}</li>
      </ul>
		<van-list
      v-model="loading"
      :finished="noMore">
      <router-link :to="{path:'/BuyPayMoney',query:{orderId:item.id}}" v-for="(item,idx) in list" :key="idx">
        <div class="content">
          <ul class="price">
          	<li class="state">应付区块链币：</li>
            <li class="money" v-if="item.price != 0">{{ (item.price/item.coinPrice).toFixed(2) }}</li>
            <li class="money" v-else>0</li>
            <li class="state">{{item.subOrderNo}}</li>
            <li class="money">￥{{item.price}}</li>
            <li class="state">钱包地址</li>
            <li class="money">{{item.walletAddress}}</li>
          </ul>
        </div>
      </router-link>
      </van-list>
    </div>

  </div>

</template>

<script>
import { Toast } from 'vant'
import qs from 'qs'
export default {
  name: 'willPayList',
  data() {
    return {
      title: '',
      list: [],
      totalPrice: '0',
      loading: false,
      noMore: false,
      pageIndex:0,
      pageSize:10,
      bite: '',					//区块链币
    }
  },
  mounted() {
    const id = this.$route.query.id
    const type = this.$route.query.type
    if (type == '0') {
      this.title = '预付款列表'
    } else {
      this.title = '尾款列表'
    }
    this.queryListData(id, type,0)
  },
  methods: {
    onRefresh() {
      this.pageIndex = 0;
      this.noMore = false;
      this.loading = true;
      this.queryListData(this.pageIndex);
    },
    onLoad() {
      this.noMore = false;
      this.loading = true;
      this.queryListData(++this.pageIndex);
    },
    onClickLeft() {
      history.go(-1)
    },
    queryListData(id, type,pageIndex) {
      this.$axios({
        url: '/api/app/prebuyOrder/getPrebuyOrderSucess',
        method: 'POST',
        data: qs.stringify({
          orderId: id,
          type: type
        })
      }).then(res => {
        this.loading =false;
        if (res.data.code == 0) {
          var data = []
          for (var d = 0; d < res.data.data.length; d++) {
            if (!res.data.data[d].allPrice) {
              data.push(res.data.data[d])
              console.log(data)
            } else {
              this.totalPrice = res.data.data[d].allPrice
            }
          }
          if(res.data.data.length<this.pageSize) {
            this.noMore = true;
          }else {
            this.noMore = false;
          }
          this.list = data
        } else {
          this.noMore = true;
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
  display: inline-block;
  float: left;
  box-sizing: border-box;
}
ul li:nth-of-type(odd) {
  font-size: 0.28rem;
  color: #999999;
}
.details {
  background-color: #ffffff;
  padding: 0rem 0.3rem;
}
.dingdan {
  width: 100%;
  height: 0.68rem;
  line-height: 0.6rem;
  border-bottom: 2px dashed #cccccc;
}
.order-right-li {
  text-align: right;
}
.price {
  height: 2.1rem;
  line-height: 0.7rem;
}
.content {
  border-bottom: 2px dashed #cccccc;
}
.money{text-align: right;}
</style>
