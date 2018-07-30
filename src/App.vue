<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0;padding: 0;}
html{height: 100%;font-family: PingFangSC-Regular}
body{font-size:.28rem;height: 100%;color: #555555;background: #F5F5F5;}
div{box-sizing: border-box;}
a{text-decoration: none;color: #4A4A4A;}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;height: 100%;width:100%;padding-top: .88rem;}
.flex_start{display: flex; justify-content: flex-start;flex-wrap: wrap;}
.flex_center_v{display: flex; justify-content: center;}
.flex_start_v{display: flex; justify-content: flex-start; align-items: center;}
.flex_end{display: flex; justify-content: flex-end;}
.flex_end_v{display: flex; justify-content: flex-end; align-items: center;}
.flex_between{display: flex; justify-content: space-between;}
.flex_between_v{display: flex; justify-content: space-between; align-items: center;}
.flex_around{display: flex; justify-content: space-around;}
.flex_around_v{display: flex; justify-content: space-around; align-items: center;}
.flex_center{display: flex; justify-content: center; align-items: center;}
.vertical_v{display: flex; align-items: center;}
.flex_c{display: flex;flex-direction: column; align-items: center;}
/*底部提交按钮样式*/
.peo_bom{background: #FFFFFF;position: fixed;bottom: 0;padding: .26rem .5rem;width: 100%;border-top: 1px solid #E5E5E5;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}

/*弹窗样式*/
.van-toast--text{min-width: 4.4rem !important;font-size: .28rem !important;padding: .24rem !important;}
/*导航栏样式*/
.van-nav-bar{height: .88rem;line-height: .88rem;background-color: rgba(255,255,255,0.82);border-bottom: 1px solid #E5E5E5;position: fixed;top: 0;width: 100%;}
.van-nav-bar__title{font-size: .36rem !important;color: #222222;}
.van-nav-bar .van-icon{color: #222222;font-size: .28rem;}
.van-nav-bar__text{font-size: .24rem;color: #222222;}
.wallet .van-nav-bar,.integralTrans .van-nav-bar{position: fixed;top: 0;width: 100%;}
.til{background-image: linear-gradient(-90deg, #FF9400 100%, #FF6808 0%);}
.til .van-nav-bar__title{color: #fff;}
/*加载样式*/
.van-list__loading .van-loading{width:.32rem;height: .32rem;margin-right: .1rem;}
.van-list__loading-text{font-size: .26rem;line-height: 1rem;}
/*单选cell*/
.van-cell{padding:.4rem .3rem;font-size:.28rem;color:#222222;border-bottom: 2px solid #e5e5e5;line-height: normal;}
.van-cell:last-child{border: 0;}
.van-radio .van-icon-check{color: #DFDFDF;}
.van-radio .van-icon{font-size: .4rem;}
.van-radio__input{height: .4rem;}
.van-radio .van-icon-checked{color: #FF6A08;}
.buyinDetail .van-cell{padding:.26rem .3rem;font-size:.28rem;color:#222222;border:0;line-height: normal;}
.buyinDetail .van-cell__value--alone{color: #666666;}
/*标签样式*/
.van-tabs--line{padding-top: .88rem;width: 100%;}
.van-tabs--line .van-tabs__wrap{height: .88rem;}
.van-tabs__wrap--scrollable .van-tab{flex: 0 0 30%;}
.van-tab{opacity: 0.8;}
.van-tab{font-size:.28rem;line-height:.88rem;}
/*卖出列表单选*/
.saleorder .van-tabs{position: fixed;top: .88rem;z-index: 5;}
.saleorder .van-radio{background: #fff;margin-top: .2rem;padding: 0 .3rem;position: relative;color: #999999;font-size: .24rem;}
.saleorder .van-radio__label{width: 100%;margin-left: 0;line-height: normal;}
.saleorder .van-radio__input{position: absolute;top: .15rem;left: .3rem;}
/*选择器*/
.van-picker-column li{padding: 0 .1rem !important;}
.van-picker-column{font-size: .4rem !important;}
.van-picker__toolbar{height: .8rem !important;line-height: .8rem !important;}
.van-hairline--top-bottom::after{border-width:.02rem 0 !important;}
.van-picker__cancel, .van-picker__confirm{padding: 0 .3rem !important;color: #000 !important;}
.van-toast--text{min-width: 4.4rem !important;font-size: .28rem !important;padding: .24rem !important;}
</style>
