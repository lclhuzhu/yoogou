<template>
	<div class="integralTrans">
		<van-nav-bar title="买入" left-text="返回" left-arrow @click-left="onClickLeft"/>
	    <div @click="link" class='top_div flex_between_v' :class="item == 2 ? 'clo999':''" v-for="item in 2">
    		<div class="">
    			<p class="top_p1">产品名称产品名称</p>
    			<p class="top_p2">2018-01-15 10:15</p>
    		</div>
    		<p class="top_p3">2,000</p>
    	</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">您目前无法购买该产品</p>
			<p class="pop_p2" @click="show = false">OK</p>
		</van-popup>
	</div>
</template>

<script>
    export default {
        name: "integralTrans",
        data() {
          return {
            time: '2018-11-23',
            money: '200',
            title: '可爱多',
            show: true
          }
        },
        methods: {
		    onClickLeft () {
		      	history.go(-1)
		    },
		    link () {
		    	this.$router.push({path:'/buyinDetail'})
		    }
	  	}
    }
</script>

<style scoped>
.clo999 p{color: #999999 !important;}
.top_div{width: 100%;height: 1.4rem;padding: 0 .3rem;background: #fff;border-bottom: 2px solid #E5E5E5;}
.top_div:last-child{border: 0;}
.top_p1{color: #222222;margin-bottom: .12rem;}
.top_p2{color: #999999;}
.top_p3{color: #FF6A08;font-size: .36rem;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>
