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
      <div class="goods-price">￥{{ data.price }}</div>
      <div class="goods-title">{{ data.name }}</div>
    </van-cell>
    <van-cell class="goods-express">
     	产品说明：<br />
     	{{ data.remark }}
    </van-cell>
    <div class="goods-remind">
      {{int_day}}
    </div>
  </van-cell-group>
  <!--弹出框-->
  <van-popup v-model="isShow">
	<p class="pop_til"><span>提示</span><span class="close" @click="isShow = false">X</span></p>
	<p class="pop_p1"><span>购买后即将发起排单...</span><br/>您的排单将在下一个交易日根据<br/>先后顺序进入排单交易池!</p>
      <div class="pop_p2" @click="ok">OK</div>
  </van-popup>
  <div class="peo_bom">
	<div class="sub" @click="onClickBuy">
	  确认买入
	</div>
  </div>
  <pass :source='source' :itemid='itemid' ref="c1" @change='isShow = true'></pass>
</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
	import mairu1 from '@/assets/mairu1.png'
	import mairu2 from '@/assets/mairu2.png'
	
	
    export default {
        name: "buyinDetail",
      	data () {
          return {
          	data:'',
          	itemid:null,
          	isShow: false,
          	status: null,			//是否设置二级密码   0设置   -1未设置
			source: 5,
			passhow: false,
			intTime:'',				//上次的买入时间
			int_day:'',				//显示倒计时
            imgs: [
              mairu1,mairu2
            ]
          }
	    },
	    created() {
	    	this.itemid = this.$route.query.id;
			this.details()	
			
		},
	    methods: {
	    	details(){
	    		let that = this
				that.$axios({
					method: 'POST',
					url: '/api/app/item/getItemById',
					data: qs.stringify({
						itemId:that.itemid,
					}),
				}).then(function(res) {
					that.data = res.data.data[0]
					that.intTime = res.data.data[0].updateTime
					that.$nextTick(
						 	that.show_time()
					)
				})
	    	},
//	    	倒计时

			show_time(){ 
			
			    let show_time = setInterval(()=>{
			    	let that = this
					var time_end = new Date(that.intTime).getTime()	//上次时间
				    var time_start = new Date().getTime(); //获取当前时间
				    var santian = 259200
				    // 计算时间差 
				    var a = time_end + santian //三天后
				    var time_distance = a- time_start; //剩余时间
				    if(time_distance>0){
				    	time_distance = time_distance --
					// 天
				    var int_day = Math.floor(time_distance/86400000) 
				    time_distance -= int_day * 86400000; 
				    // 时
				    var int_hour = Math.floor(time_distance/3600000) 
				    time_distance -= int_hour * 3600000; 
				    // 分
				    var int_minute = Math.floor(time_distance/60000) 
				    time_distance -= int_minute * 60000; 
				    // 秒 
				    var int_second = Math.floor(time_distance/1000) 
				    // 时分秒为单数时、前面加零 
				    if(int_day < 10){ 
				        int_day = "0" + int_day; 
				    } 
				    if(int_hour < 10){ 
				        int_hour = "0" + int_hour; 
				    } 
				    if(int_minute < 10){ 
				        int_minute = "0" + int_minute; 
				    } 
				    if(int_second < 10){
				        int_second = "0" + int_second; 
				    } 
				    // 显示时间 
				    int_day  = int_day +'天'+ int_hour +'时'+ int_minute +'分'+ int_second+'秒'+'后可以发起买入'
					that.int_day = int_day
				    }else{
				    	that.int_day = "可以买入"
				    }
					
			    },1000)
			    
			},

	    	onClickLeft() {
	      		history.go(-1)
	    	},
//	    	弹框确定买入
	      	onClickBuy () {
	      		let that = this
	      		this.$refs.c1.check()
	      	},
	      	
//	      	确定
	      	ok () {
	      		let that = this
				that.isShow = false
	      	},
	      	//关闭二级密码
		    get () {
		    	this.passhow = false
		    },
			
	    },
	    components: {
			pass
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
    width: 100%;
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
