<template>
	<div class="IntegralDealList">
		<van-nav-bar title="积分交易情况" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<van-tabs v-model="active" @click="onClick">
		  <van-tab v-for="(d,index) in tab" :title="d" :key='index'></van-tab>
		</van-tabs>
    <van-pull-refresh v-model="loading" @refresh="onRefresh" >
		<van-list
      v-model="loading"
      :finished="noMore"
      @load="onLoad">
      <div class="cell" v-for="(item,idx) in list" :key="idx">
        <div class="integral-mairu-list" v-if="checkIndex == 0">
			<router-link :to="{path:'/buyOrderDetails' ,query:{id:item.id}}">
				<div class="list-single">
					<div class="date">
						<p>{{item.createTime}}</p>
            <div v-if="isCollide" @click="requestCancelCollide" class="collide" :style="{marginLeft:'0.6rem'}"><img :style="{width:'0.36rem',height:'0.36rem',marginRight:'0.2rem'}" src="../assets/icon_collide.png"/>防撞单</div>
            <div class="space"></div>
            <p @click="(e)=>{e.preventDefault(); requestBoost(item)}" class="boost">加速进场</p>
          </div>
					<div class="details">
						<ul class="dingdan">
							<li class="state">订单号</li>
							<li class="money dingdan-right-li">{{item.prebuyOrderNo}}</li>
						</ul>
						<ul class="price">
							<li class="state">购买积分价格</li>
							<li class="money">{{'￥'+item.price}}</li>
						</ul>
						<ul class="await">
							<li class="state">预付款</li>
							<li class="money">{{'￥'+item.firstPrice}}<span :style="{color:getStatusColor(item.status)}">{{getStatusStr(item.firstStatus)}}</span></li>

						</ul>
						<ul class="tail">
							<li class="state">尾款</li>
							<li class="money" >{{'￥'+item.endPrice}}<span :style="{color:getStatusColor(item.status)}">{{getStatusStr(item.endStatus)}}</span></li>
						</ul>
					</div>
				</div>
			</router-link>
        </div>
      <div class="integral-maichu-list" v-if="checkIndex == 1">
			<router-link :to="{path:'/saleOrderDetails',query:{'orderId':item.id,'No':item.presaleOrderNo}}">
				<div class="list-single">
					<div class="date">
						{{item.saleTime}}
					</div>
					<div class="details">
						<ul class="dingdan">
							<li class="state">订单号</li>
							<li class="money dingdan-right-li">{{item.presaleOrderNo}}</li>
						</ul>
						<ul class="price">
							<li class="state">购买积分价格</li>
							<li class="money"><span>{{'￥'+item.salePrice}}</span></li>
						</ul>
						<ul class="status">
							<li class="state">卖出状态</li>
							<li class="money" :style="{color:getStatusColor(item.status)}"><span>{{getStatusStr(item.status)}}</span></li>
						</ul>
					</div>
				</div>
			</router-link>
		</div>
      </div>
		</van-list>
  </van-pull-refresh>
	</div>
</template>

<script>
import { Toast } from 'vant'
import qs from 'qs'
export default {
  name: 'IntegralDealList',
  data() {
    return {
      isCollide: false,
      tab: ['买入订单', '卖出订单'],
      list: [],
      loading: false,
      noMore: false,
      pageIndex: 0,
      pageSize: 10,
      active: 2,
      title: '',
      checkIndex: ''
    }
  },
  mounted() {
    console.log(this.$store.state.Exchange.userId)
    this.requestIsCollide()
  },
  computed: {},
  methods: {
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
    onClickLeft() {
      history.go(-1)
    },
    onClickRight() {
      Toast('按钮')
    },
    onClick(index, title) {
      this.list = []
      this.pageIndex = 0
      this.noMore = false
      this.checkIndex = index
    },
    onLoad(args) {
      this.requestListData(++this.pageIndex)
    },
    onRefresh() {
      this.pageIndex = 0
      this.requestListData(this.pageIndex)
    },
    // 查询防撞单开启状态
    requestIsCollide() {
      this.$axios({
        url: '/api/app/prebuyOrder/getIsCollisionOrder',
        method: 'POST',
        data: qs.stringify({
          userId: localStorage.getItem('userId')
        })
      }).then(res => {
        if (res.data.code == 0) {
          this.isCollide = res.data.data
        } else {
          Toast(res.data.msg || '查询失败')
        }
      })
    },
    // 取消防撞单
    requestCancelCollide() {
      this.$axios({
        url: '/api/app/prebuyOrder/setIsCollisionOrder',
        method: 'POST',
        data: qs.stringify({
          flag: '0',
          userId: localStorage.getItem('userId')
        })
      }).then(res => {
        if (res.data.code == 0) {
        } else {
          Toast(res.data.msg || '查询失败')
        }
        this.requestIsCollide()
      })
    },
    // 加速
    requestBoost(item) {
      this.$axios({
        url: '/api/app/buyItem/quickBuyItem',
        method: 'POST',
        data: qs.stringify({
          orderId: item.id
        })
      }).then(res => {
        if (res.data.code == 0) {
        } else {
          Toast(res.data.msg || '请求失败')
        }
      })
    },
    requestListData(pageIndex) {
      if (this.checkIndex == 0) {
        this.$axios({
          url: '/api/app/prebuyOrder/getPrebuyOrderInfo',
          method: 'POST',
          data: qs.stringify({
            userId: localStorage.getItem('userId')
          })
        }).then(res => {
          this.loading = false
          if (res.data.code == 0) {
            if (pageIndex == 0) {
              this.list = res.data.data
            } else {
              this.list = this.list.concat(res.data.data)
            }
            console.log(this.list)
            if (res.data.data.length < this.pageSize) {
              this.noMore = true
            }
          } else {
            Toast(res.data.msg || '查询失败')
          }
        })
      } else {
        this.$axios({
          url: '/api/app/presaleOrder/getPresaleOrderAll',
          method: 'POST',
          data: qs.stringify({
            userId: localStorage.getItem('userId')
          })
        }).then(res => {
          this.loading = false
          if (res.data.code == 0) {
            if (pageIndex == 0) {
              this.list = res.data.data
            } else {
              this.list = this.list.concat(res.data.data)
            }
            if (res.data.data.length < this.pageSize) {
              this.noMore = true
            }
          } else {
            Toast(res.data.msg || '查询失败')
          }
        })
      }
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
.cell {
  background-color: transparent;
}
.money {
  color: #000000;
}
.state {
  color: #999999;
}

.integral-mairu-list {
  width: 100%;
  height: 100%;
}
.integral-mairu-list span {
  position: absolute;
  right: 0.3rem;
  font-size: 0.28rem;
}
.integral-maichu-list span {
  position: absolute;
  right: 0.3rem;
  font-size: 0.28rem;
}
.list-single {
  height: 3.5rem;
  width: 100%;
  box-sizing: border-box;
}
.collide {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.space {
  flex: 1;
}
.boost {
  margin-right: 0.3rem;
  width: 1.4rem;
  height: 0.6rem;
  font-size: 0.24rem;
  color: #ffffff;
  text-align: center;
  line-height: 0.6rem;
  background-image: linear-gradient(-90deg, #ff9400 0%, #ff6808 100%);
  border-radius: 0.1rem;
}
.date {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 0.28rem;
  color: #999999;
  align-items: center;
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.3rem;
  border-bottom: 1px solid #e9e9e9;
}
.date > span {
  display: inline-block;
}
.details {
  background-color: #ffffff;
  padding: 0rem 0.3rem;
}
.dingdan {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #e5e5e5;
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
.status {
  height: 0.56rem;
  line-height: 0.56rem;
}
</style>
