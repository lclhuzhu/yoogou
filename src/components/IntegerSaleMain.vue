<template>
<div class="container1">
  <van-nav-bar title="卖出" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="container">
    <div class="sall-item" @click="onSaleGoodsClick">
      <div class="column">
          <span class="txt1">商品卖出</span>
          <span class="txt2">CLOTHESOLD</span>
      </div>
      <img class="img" src="../assets/pic_sale_left.png" />
    </div>
    <div class="sep-line"></div>
    <div class="sall-item" @click="onSaleIncomeClick">
      <div class="column">
          <span class="txt1">直推收益卖出</span>
          <span class="txt2">DIRECTSELL</span>
      </div>
      <img class="img" src="../assets/pic_sale_right.png" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSaleGoodsClick() {
      this.$router.push('integerSaleGoods');
    },
    onSaleIncomeClick() {
      this.$router.push('integerSaleIncome');
    }
  }
}
</script>

<style scoped>
.container1 {
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: stretch;
}
.sep-line {
  background: #cccccc;
  margin-right: 0.2rem;
  width: 0.01rem;
}
.container {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.sall-item {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.img {
  width: 1.4rem;
  height: 2rem;
}
.txt1 {
  font-size: 0.24rem;
  color: #222222;
  letter-spacing: 0;
}
.txt2 {
  font-size: 0.2rem;
  color: rgba(204, 204, 204, 0.4);
  letter-spacing: 0;
  margin-top: 0.1rem;
}
</style>
