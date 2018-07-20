<template>
    <div class="receiveDetail">
      <van-nav-bar title="收款详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
      <div class="details">
        <ul class="dingdan">
          <li class="state">b2018070100001-001</li>
          <li class="money dingdan-right-li">¥3000</li>
        </ul>

        <ul class="middle">
          <li class="state">付款钱包地址</li>
          <li class="money dingdan-right-li">DGDSGFHFDfgfsfsd</li>
        </ul>

        <ul class="ul-img">
          <li><img class="div-img" src="" /></li>
          <li><img class="div-img" src="" /></li>
          <li><img class="div-img" src="" /></li>
        </ul>
    </div>

      <div class="bottom">
        <ul class="button-ul">
          <li class="left-li" @click="isShow=true">确认未收到足够款项</li>
          <li class="right-li">确认已收款</li>
        </ul>
      </div>

      <!--弹框-->
      <van-popup v-model="isShow" :close-on-click-overlay = "true">
        <div class="pop-bottm">
          <span class="title">提示</span>
          <div class="line"></div>
          <p class="pop-p1">确认后将无法撤销，请确实该笔</p>
          <p class="pop-p2">交易未收到足额款项！</p>
          <ul>
            <router-link to="/IntegralDealList">
              <li class="will-pay">确认</li>
            </router-link>

            <router-link to="">
              <li class="delay">取消</li>
            </router-link>

          </ul>

        </div>
      </van-popup>
    </div>
</template>

<script>
    export default {
        name: "receiveDetail",
      data() {
          return {
            isShow: false,
          }
      },
      methods: {
        onClickLeft () {
          history.go(-1);
        }
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
