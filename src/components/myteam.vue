<template>
	<div class="myteam">
		<van-nav-bar title="我的团队" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="flex_between_v top_cle">
			<div class="top_til flex_center">
				团队人数：<span class="pep_span">111</span>
			</div>
			<div class="top_til top_t1">
				<p class="top_p1">直推人数：2</p>
				<p class="top_p1">激活次数：6</p>
			</div>
		</div>
		<div class="top_nav flex_between_v">
			<p class="nav_p">账号</p>
			<p class="nav_p">状态</p>
			<p class="nav_p">是否激活</p>
		</div>
		<div class="list_fater">
			<div class="my_list flex_between_v" v-for="item in 5">
				<div class="list_con" @click="detail">
					<p>15911111111</p>
					<p>张三</p>
				</div>
				<p class="list_con">冻结</p>
				<div class="list_con flex_center_v">
					<p>未激活 | </p>
					<p class="colff6" @click="show = true">&nbsp;激活</p>
				</div>
			</div>
		</div>
		<!--弹出框-->
		<van-popup v-model="show">
			<p class="pop_til"><span>提示</span><span class="close" @click="show = false">X</span></p>
			<p class="pop_p1">确认激活15911211111（李四）账户？</p>
			<div class="flex_center">
				<p class="pop_p2" @click="show = false">确认</p>
				<p class="pop_p3" @click="show = false">取消</p>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name:'myteam',
		data () {
			return {
				show: true
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		    //详情
		    detail () {
		    	this.$router.push({path:'/userDetails'})
		    }
	    }
	})
</script>

<style scoped>
.colff6{color: #FF6A08 !important;}
.top_cle{border-bottom: 2px solid #E5E5E5;}
.top_til{background: #FFFFFF;width: 100%;height: 1rem;flex: 1;text-align: center;color: #666666;}
.top_t1{display: flex;flex-direction: column;justify-content: center;}
.pep_span{color: #101010;}
.top_p1{font-size: .24rem;color: #666666;}
.top_nav{width: 100%;height: 1rem;background: rgba(216,216,216,0.02);padding: .2rem 0;border-bottom: 2px solid #E5E5E5;}
.nav_p{flex: 1;height: 100%;border-right: 2px solid #E5E5E5;color: #222222;text-align: center;line-height: .6rem;}
.nav_p:nth-child(3){border: 0;}
.my_list{width: 100%;height: 1.2rem;}
.list_con{flex: 1;text-align: center;color: #999999;}
.my_list:nth-child(2n){background: #FFFFFF;}
/*弹窗*/
.van-popup{width: 6.34rem;height: 3.92rem; border-radius: 12px; text-align: center;border-radius: 24px;color: #222222;}
.pop_til{width: 100%;height: .92rem;line-height: .92rem;position: relative;border-bottom: 2px solid #E5E5E5;font-size: .36rem;}
.close{position: absolute;right: .3rem;color: #D2D2D2;}
.pop_p1{margin: .76rem 0 .58rem 0;font-size: .32rem;}
.pop_p2{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 100px;color: #fff;font-size: .32rem;}
.pop_p3{width: 2.4rem;height: .8rem;line-height: .8rem; text-align: center;margin: auto; background:#FFFFFF;border: 2px solid #FF6D0C; border-radius: 100px;color: #FF6D0C;font-size: .32rem;}
/*弹窗结束*/
</style>