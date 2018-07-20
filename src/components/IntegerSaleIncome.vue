<template>
  <div class="container1">
    <van-nav-bar title="直推收益卖出" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
        <span class="label">请输入要卖出的金额：</span>
        <van-field v-model="phone" class="input" placeholder="请输入金额" type="number" />
        <span class="tip">*直推收益：8888.48</span>
    </div>
    <div class="bottom">
        <van-button :class="['submit',!enable?'unable':'enable']" type="primary" :disabled="!enable" @click="onSubmit">提交卖出</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleIncome',
  data() {
    return {
      phone: ''
    }
  },
  computed: {
    enable: () => {
      return true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit() {}
  }
}
</script>

<style scoped>
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
  border-radius: 2rem;
  font-size: 0.32rem;
}
.bottom {
  position: absolute;
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
  border-top-width: 0.03rem;
  border-top-style: solid;
}
.container1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  background: #f5f5f5;
}
.container {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.4rem;
  padding-bottom: 0.3rem;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  align-items: stretch;
}
.label {
  font-size: 0.32rem;
  color: #666666;
  letter-spacing: 0;
  text-align: left;
  line-height: 0.36rem;
}
.input {
  color: #222222;
  font-size: 0.3rem;
  flex: 1;
  border: 2px solid #e9e9e9;
  border-radius: 1rem;
  height: 0.8rem;
  vertical-align: center;
  margin-top: 0.4rem;
}
.tip {
  font-size: 0.28rem;
  color: #999999;
  letter-spacing: 0;
  text-align: left;
  line-height: 0.36rem;
  margin-top: 0.72rem;
}
</style>
