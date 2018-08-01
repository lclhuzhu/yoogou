<template>
  <div class="container1">
    <van-nav-bar title="直推收益卖出" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
        <span class="label">请输入要卖出的金额：</span>
        <input type="number" placeholder="请输入金额" v-model="money"/>
        <span class="tip">*直推收益：{{ profit }}</span>
    </div>
    <div class="peo_bom">
			<div class="sub" v-if="money" @click="upcheck">
				提交卖出
			</div>
			<div class="sub opt4" v-else>
				提交卖出
			</div>
		</div>
		<pass :source='source' :money='money' ref="c1" @change='linkorder'></pass>		
		<!--弹窗-->
		<van-popup v-model="showc">
			<p class="pop_til"><span>提示</span><span class="close" @click="showc = false">X</span></p>
			<div class="flex_center">
				<p class="pop_p1">您即将发起一笔卖出金额为（{{ money }}）的订单，请确认！</p>
			</div>
			<div class="flex_center bottom_ok">
				<p class="pop_p2" @click="onSubmit">确认</p>	
				<p class="pop_p3" @click="showc = false">取消</p>
			</div>
		</van-popup>
  </div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	import pass from '@/components/intpassword.vue'
	export default {
	  name: 'SaleIncome',
	  data() {
	    return {
	    	source: 3,						//直推收益卖出
	      money: '',						//卖出金额
	      profit: 0, 						//直推收益
	      show: false,					//弹窗1
	      msg: '',							//弹窗提示信息
	      showc: false,					//弹窗2
	    }
	  },
	  created () {
	  	this.getpeo()
	  },
	  methods: {
	    onClickLeft() {
	      this.$router.go(-1)
	    },
	    //获取收益
	    getpeo () {
	    	let that = this
	    	that.$axios({
		     	url: '/api/app/presale/getScheduleProfit',
		      method: 'POST',
        	data: qs.stringify({
          		userId: localStorage.getItem('userId'),
        	})
      	}).then(res => {
	        if (res.data.code == 0) {
	        	
	        } else {
	          Toast(res.data.msg)
	        }
      	})
	    },
	    //判断状态
	    upcheck () {
	    	this.showc = true
	    },
	    //提交
	    onSubmit() {
	    	let that = this
	    	that.showc = false
        //调用二级密码组件方法
				that.$refs.c1.check()
	    },
	    //成功回调
	    linkorder () {
	    	this.$router.push({path:'/IntegralDealList'})
	    }
	  },
		components: {
			pass
		}
	}
</script>

<style scoped>
.opt4{opacity: .4;}
.unable {
  background-image: linear-gradient(-90deg, #ffc97f 0%, #ffb484 100%);
}
.enable {
  background-image: linear-gradient(-90deg, #ff9400 0%, #ff6808 100%);
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
.tip {
  font-size: 0.28rem;
  color: #999999;
  letter-spacing: 0;
  text-align: left;
  line-height: 0.36rem;
  margin-top: 0.72rem;
}
input{
	height: .8rem;
	border-radius: 40px;
	border: 1px solid #E9E9E9;
	margin-top: .3rem;
	padding: 0 .2rem;
}
/*弹窗*/
.van-popup{width: 6.34rem;min-height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .3rem 0 .3rem 0;font-size: .28rem;padding: 0 .8rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto;margin-left: .4rem; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
.bottom_ok{position: absolute; bottom: .4rem;left: 50%;transform: translateX(-50%);}
/*弹窗结束*/
</style>
