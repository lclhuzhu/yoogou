<template>
  <div class="container1">
    <van-nav-bar title="选择卖出订单" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-tabs v-model="active" >
		    <van-tab v-for="(val,idx) in mtabs" :title="val" :key="idx">

            <van-list :class="['list',idx==0?'list-first':'']"
              v-model="refreshState[idx].loading"
              :finished="refreshState[idx].finished"
              @load="onLoad"
            >
              <div class="list_cell" v-for="(item,idx) in refreshState[idx].data" :key="idx" :title="idx + ''" >
                <div :class="['list_content']">
                  <div :class="['list-item-title']">
                    <img class="list-item-check" src="../assets/unchecked.png"/>
                    <span class="list-item-key">
                      b2018071500001
                    </span>
                    <span :class="['list-item-value']" :style="{color:'#19BA46'}">
                      可卖出
                    </span>
                  </div>
                  <div :class="['list-item-row','list-item-withcheck']">
                    <span class="list-item-key">
                      买入时商品价值
                    </span>
                    <span :class="['list-item-value']">
                      2000
                    </span>
                  </div >
                   <div :class="['list-item-row','list-item-withcheck']">
                    <span class="list-item-key">
                      当前商品价值
                    </span>
                    <span :class="['list-item-value']">
                      2000
                    </span>
                  </div>
                   <div :class="['list-item-row','list-item-withcheck']">
                    <span class="list-item-key">
                      买入时间
                    </span>
                    <span :class="['list-item-value']">
                      2000
                    </span>
                  </div>
                </div>
              </div>
            </van-list>


          <div class="bottom" v-if="idx==0">
              <van-button :class="['submit',!enable?'unable':'enable']" type="primary" :disabled="!enable" @click="onSubmit">提交卖出</van-button>
          </div>
        </van-tab>
		  </van-tabs>
   </div>
</template>

<script>
export default {
  name: 'SaleGoods',
  data() {
    return {
      mtabs: ['可卖出', '交易中', '已卖出'],
      active: 0,
      enable: false,
      refreshState: [
        {
          refreshing: false,
          loading: false,
          finished: true,
          pageIndex: 0,
          pageSize: 10,
          noMore: false,
          data: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ]
        },
        {
          refreshing: false,
          loading: false,
          finished: false,
          pageIndex: 0,
          pageSize: 10,
          noMore: false,
          data: []
        },
        {
          refreshing: false,
          loading: false,
          finished: false,
          pageIndex: 0,
          pageSize: 10,
          noMore: false,
          data: []
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onRefresh() {},
    onLoad() {},
    onSubmit() {}
  }
}
</script>

<style scoped>
.list-item-check {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.2rem;
}
.list-item-title {
  padding-right: 0.3rem;
  display: flex;
  flex-direction: row;
  height: 0.68rem;
  align-items: center;
  border-bottom: #cccccc;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.sale-enable {
  color: #19BA46;
}
.list-item-row {
  padding-right: 0.3rem;
  display: flex;
  flex-direction: row;
  padding-top: 0.2rem;
}
.list-item-withcheck {
  padding-left: 0.5rem;
}
.list-item-key {
  flex:1;
  font-size: 0.24rem;
  color: #999999;
}
.list-item-value {
  font-size: 0.24rem;
  color: #222222;
}
.list_content {
  padding-bottom: 0.32rem;
  background: #ffffff;
  padding-left: 0.3rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.list_cell {
  width: 100%;
  padding-top: 0.2rem;
}
.list {
  overflow: scroll;
  position: fixed;
  left: 0;
  right: 0;
  top: 1.68rem;
  bottom: 0;
}
.list-first {
  padding-bottom: 1.3rem;
}
.container1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  background: #f5f5f5;
}
.unable {
  background-image: linear-gradient(-90deg, #ffc97f 0%, #ffb484 100%);
}
.enable {
  background-image: linear-gradient(-90deg, #ff9400 0%, #ff6808 100%);
}
.submit {
  height: 0.88rem;
  color: white;
  border-style: none;
  border-radius: 200px;
  font-size: 0.32rem;
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 1.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: stretch;
  justify-content: center;
  border-top-color: #e5e5e5;
  border-top-width: 0.02rem;
  border-top-style: solid;
}
</style>
