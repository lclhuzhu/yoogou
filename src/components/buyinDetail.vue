<template>
<div class="buyinDetail">
	<van-nav-bar title="买入" left-text="返回" left-arrow @click-left="onClickLeft"/>
  <!--//轮播-->
  <van-swipe class="goods-swipe" :autoplay="3000">
    <van-swipe-item v-for="img in imgs" :key="img">
      <img :src="img">
    </van-swipe-item>
  </van-swipe>
  <van-cell-group>
    <van-cell>
      <div class="goods-price">￥{{ price }}</div>
      <div class="goods-title">{{ title }}</div>
    </van-cell>
    <van-cell class="goods-express">
      {{express}}
    </van-cell>
    <div class="goods-remind">
      {{remind}}
    </div>
  </van-cell-group>
	<!--弹框-->
  <van-popup v-model="isShow" :close-on-click-overlay = "true">
    <div class="pop-bottm">
        <span class="title">提示</span>
        <div class="line"></div>
      <!--<img src="" >-->
        <p class="pop-p1">购买后即将发起排单…</p>
        <p class="pop-p2">您的排单将在下一个交易日根据</p>
        <p class="pop-p3">先后顺序进入排单交易池</p>
        <router-link to="/IntegralDealList">
          <div class="ok">
            OK
          </div>
        </router-link>
    </div>
  </van-popup>
  <div class="peo_bom">
	<div class="sub" @click="sub">
	  确认买入
	</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "buyinDetail",
      	data () {
          return {
          	isShow: false,
            title: '新品和田蓝玉香炉玉石毛料冰种原料牌子\n阳绿色A货',
            price: 10000,
            express: '产品说明：\n投资2000，单日利率1%，单个交易周期收益最高15%',
            remind: '*2天20小时18分后可以发起买入',
            imgs: [
              'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
              'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            ]
          }
	      },
		    methods: {
		    	onClickLeft() {
		      	history.go(-1)
		    	},
		      onClickBuy () {
		        alert("点击了确认购买");
		      }
		    }
	    }
</script>

<style scoped>
  .goods {
    width: 100%;
    height: 9.6rem;
    background-color: deeppink;
  }
  img {
    width: 7.5rem;
    height: 6.18rem;
    display: block;
  }
  .goods-price {
    color: #FF6A08;
    font-size: .44rem;
    margin-left: .30rem;
    line-height: .44rem;
  }
  .goods-title {
    color: #222222;
    font-size: .32rem;
    margin-left: .30rem;
    margin-top: .2rem;
    line-height: .32rem;
    font-weight: bold;
  }
  .goods-express {
    font-size: .24rem;
    color: #666666;
    margin-left: .30rem;
  }
  .goods-remind {
    width: 100%;
    height: 1.2rem;
    /*margin-left: .30rem;*/
    padding-left: .30rem;
    padding-top: .20rem;
    color: #FF3D47;
    font-size: .24rem;
    background-color: #F5F5F5;
  }
  .van-cell:first-child {
    height: 2.2rem;
    padding-top: .30rem;
  }
  .van-cell:nth-child(2) {
    height: 1.2rem;
    line-height: 1.2rem;
  }
  .van-cell:last-child {
    height: 1.1rem;
    padding-top: .2rem;

  }
  .bottom {
    width: 100%;
    height: 1.4rem;
    background-color: white;
    text-align: center;
    position: relative;
  }
  .button {
    width: 6.5rem;
    height: .88rem;
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
<style>
  .van-popup {
  width: 6.3rem;
  height: 3.9rem;
  margin: 0 auto;
  border-radius: 12px;
  }
  .pop-bottm {
    text-align: center;
    padding-top: .30rem;
  }

.title { font-size: .36rem;
  display: inline-block;
  margin: 0 auto;
}
  .line {width: 6.3rem; height: 1px; background-color: #DDDDDD; margin-top: .25rem}
  .ok {background-color: #FF9400; color: white; width: 2.4rem; height: .8rem; margin: 0 auto; border-radius: .44rem; line-height: .8rem; margin-top: .2rem;}
  .pop-p1 {margin-top: .22rem; line-height: .48rem}
  .pop-p2 {line-height: .48rem}
  .pop-p3 {line-height: .48rem}
</style>
