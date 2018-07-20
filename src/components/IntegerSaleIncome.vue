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
    enable:()=>{
      return true;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit() {

    }
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
  height: 44px;
  color: white;
  border-style: none;
  border-radius: 100px;
  font-size: 16px;
}
.bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 65px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: stretch;
  justify-content: center;
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
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  align-items: stretch;
}
.label {
  font-size: 16px;
  color: #666666;
  letter-spacing: 0;
  text-align: left;
  line-height: 18px;
}
.input {
  color: #222222;
  font-size: 15px;
  flex: 1;
  border: 1px solid #E9E9E9;
  border-radius: 20px;
  vertical-align: center;
  margin-top: 20px;
}
.tip {
  font-size: 14px;
color: #999999;
letter-spacing: 0;
text-align: left;
line-height: 18px;
margin-top: 38px;
}
</style>
