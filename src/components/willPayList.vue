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

      <!--<ul class="price">-->
        <!--<li class="state">购买积分价格</li>-->
        <!--<li class="money"><i>$</i>200</li>-->
        <!--<li class="state">预付款</li>-->
        <!--<li class="money"><i>$</i>200<span>欠着</span></li>-->
      <!--</ul>-->
      <!--<ul class="await">-->
        <!--<li class="state">预付款</li>-->
        <!--<li class="money"><i>$</i>200<span>欠着</span></li>-->
        <!--<li class="state">尾款</li>-->
        <!--<li class="money"><i>$</i>20<span>不给了</span></li>-->
      <!--</ul>-->
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
  .await{
    height: 0.56rem;
    line-height: 0.56rem;
    border-bottom: 1px solid #CCCCCC;
  }
  .tail{
    height: 0.56rem;
    line-height: 0.56rem;
  }
  .content {height: 1.6rem; border-bottom: 2px dashed #CCCCCC;}
</style>
