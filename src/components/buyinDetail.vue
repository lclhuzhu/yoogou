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
     	产品说明：<br />
     	投资2000，单日利率1%，单个交易周期收益最高15%
    </van-cell>
    <div class="goods-remind">
      {{remind}}
    </div>
  </van-cell-group>
  <!--弹出框-->
  <van-popup v-model="isShow">
	<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
	<p class="pop_p1"><span>购买后即将发起排单...</span><br/>您的排单将在下一个交易日根据<br/>先后顺序进入排单交易池!</p>
	<router-link to="/IntegralDealList">
      <div class="pop_p2">
        OK
      </div>
    </router-link>
  </van-popup>
  <div class="peo_bom">
	<div class="sub">
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
          	isShow: true,
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
    line-height: .44rem;
  }
  .goods-title {
    color: #222222;
    font-size: .32rem;
    margin-top: .2rem;
    line-height: .32rem;
    font-weight: bold;
  }
  .goods-express {
    font-size: .24rem;
    color: #666666;
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
  /*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .3rem 0;font-size: .32rem;padding: 0 .3rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>
