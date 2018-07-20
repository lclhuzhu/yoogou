<template>
  <div class="willPayList">
    <van-nav-bar title="预付款列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="details">
      <ul class="dingdan">
        <li class="state">合计</li>
        <li class="money order-right-li">111111</li>
      </ul>
      <router-link to="/BuyPayMoney">
        <div class="content">
          <ul class="price">
            <li class="state">b2018070100001-001</li>
            <li class="money"><i>$</i>200</li>
            <li class="state">钱包地址</li>
            <li class="money">DGDSGFHFDfgfsfsd</li>
          </ul>
        </div>
      </router-link>


      <div class="content">
        <ul class="price">
          <li class="state">b2018070100001-001</li>
          <li class="money"><i>$</i>200</li>
          <li class="state">钱包地址</li>
          <li class="money">DGDSGFHFDfgfsfsd</li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "willPayList",

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
  ul li:nth-of-type(odd) {
    font-size: .28rem;
    color: #999999;
  }
  .details{
    background-color: #FFFFFF;
    padding: 0rem 0.3rem;
    height: 5rem;
  }
  .dingdan{
    width: 100%;
    height: 0.68rem;
    line-height: 0.6rem;
    border-bottom: 2px dashed #CCCCCC;
  }
  .order-right-li{
    text-align: right;
  }
  .price{
    height: 0.7rem;
    line-height: 0.7rem;
  }
  .content {height: 1.6rem; border-bottom: 2px dashed #CCCCCC;}
</style>
