<template>
	<div class="integralTrans">
		<van-nav-bar title="买入" left-text="返回" left-arrow @click-left="onClickLeft"/>
	    <van-cell-group v-for="item in 5">
	    	<router-link to="/buyinDetail">
	    		<van-cell class="flex_center" title="产品名称产品名称" value="2000" label="2018-01-15 10:15" ></van-cell>
	    	</router-link>
	    </van-cell-group>
	</div>

  <!--<van-popup v-model="isShow">-->
    <!--<p class="pop1">提示</p><img src="">-->
    <!--<p class="pop2">您目前无法购买该产品</p>-->
    <!--<div class="ok">OK</div>-->
  <!--</van-popup>-->
</template>

<script>
    export default {
        name: "integralTrans",
      isShow: false,
        data() {
          return {
            time: '2018-11-23',
            money: '200',
            title: '可爱多'
          }
        },
        methods: {
		    onClickLeft() {
		      	history.go(-1)
		    },

	  	}
    }
</script>

<style scoped>
</style>
<style>
  .van-cell {height: 1.4rem}
  .van-cell__title span { font-size: .28rem; color: #222; }
  .van-cell__value span { color: #FF6A08; font-size: .36rem; }
  .van-cell__label {font-size: .24rem; margin-top: 0.08rem; }
</style>
