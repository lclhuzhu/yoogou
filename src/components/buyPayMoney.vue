<template>
    <div class="buyPayMoney">
      <van-nav-bar title="买入订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
      <div class="details">
        <ul class="dingdan">
          <li class="state">合计</li>
          <li class="money">111111</li>
        </ul>
          <div class="content">
            <ul class="price">
              <li class="state">钱包地址</li>
              <li class="money">DGDSGFHFDfgfsfsd</li>
            </ul>
            <div class="button">
              复制该地址
            </div>
          </div>

        <div class="bottom">
          <img src="@/assets/add-pic-icon@2x.png">
          <span>*凭证图片最多可上传6张</span>
        </div>

        <div class="submit-bottom">
          <div class="submit-button" @click="isShow = true">提交</div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "buyPayMoney"
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
    border-bottom: 2px dashed #dddddd;
  }
  .price{
    height: 0.7rem;
    line-height: 0.7rem;
  }
  .button {
    width: 1.7rem;
    height: .56rem;
    line-height: .56rem;
    background: linear-gradient(left,#FF9400,#FF6808 );
    margin: 0 auto;
    border-radius: .44rem;
    color: #FFFFFF;
    font-size: .24rem;
    text-align: center;
    margin-left: .20rem;
    /*position: absolute;*/
    /*top: .2rem;*/
    /*left: .5rem;*/
  }
  .content {height: 1.6rem; border-bottom: 2px dashed #dddddd;}
  .bottom img {display: block; width: 1.6rem; height: 1.6rem; margin-top: .40rem; margin-bottom: .20rem; border: 2px dashed #dddddd;}
  .bottom span {display: block; width: 2.7rem; height: .44rem; color: #FF545D; font-size: .24rem}
  .submit-bottom {
    width: 100%;
    height: 1.4rem;
    background-color: white;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .submit-button {
    width: 6.5rem;
    height: .88rem;
    font-size: .32rem;
    color: white;
    /*corner-radius: .44rem;*/
    background: linear-gradient(left,#FF9400,#FF6808 );
    line-height: .88rem;
    text-align: center;
    border-radius: .44rem;
    position: absolute;
    top: .2rem;
    left: .5rem;
  }
</style>
