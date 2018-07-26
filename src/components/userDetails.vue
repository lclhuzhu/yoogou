<template>
	<div class="userDetails">
		<van-nav-bar title="用户详情" left-text="返回" left-arrow @click-left="onClickLeft"/>	
		<div class="flex_between_v">
			<p>账户</p>
			<p class="fle_p2">{{ userTel }}</p>
		</div>
		<div class="flex_between_v">
			<p>买入累计（笔）</p>
			<p class="fle_p2">{{ allBuyNum }}</p>
		</div>
		<div class="flex_between_v">
			<p>卖出累计（笔）</p>
			<p class="fle_p2">{{ allSaleNum }}</p>
		</div>
		<div class="flex_between_v">
			<p>最近一笔买入</p>
			<p class="fle_p2">{{ lastBuyTime }}</p>
		</div>
		<div class="flex_between_v">
			<p>最近一笔卖出</p>
			<p class="fle_p2">{{ lastSaleTime }}</p>
		</div>
		<div class="flex_between_v">
			<p>是否托管</p>
			<p class="fle_p2">{{ isTrust }}</p>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'userDetails',
		data () {
			return {
				teamId: '',						//成员id
				userTel: 11111111111,			//账户
				allBuyNum: 0,					//买入累计
				allSaleNum: 0,					//卖出累计
				lastBuyTime: 0,					//最后一次买入
				lastSaleTime: 0,				//最后一次卖出
				isTrust: ''						//是否托管				
			}
		},
		created () {
			this.teamId = this.$route.query.teamId
			let userId = this.teamId 
			this.getInfo(userId)
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		    //获取信息
		    getInfo (userId) {
		    	let that = this
		        that.$axios({
		      	  	url: '/api/app/myTeamInfo/selectTeamUser',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId:userId
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	that.userTel = res.data.data.userTel
			        	that.allBuyNum = res.data.data.allBuyNum
			        	that.allSaleNum = res.data.data.allSaleNum
			        	that.lastBuyTime = res.data.data.lastBuyTime
			        	that.lastSaleTime = res.data.data.lastSaleTime
			        	that.isTrust = res.data.data.isTrust
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //详情
		    detail () {
		    	this.$router.push({path:'/userDetails'})
		    }
	    }
	})
</script>

<style scoped>
.flex_between_v{color: #999999;padding: 0 .3rem;border-bottom: 2px solid #E5E5E5;width: 100%;height: 1rem;background: #FFFFFF;}
.flex_between_v:last-child{border: 0;}
.fle_p2{color: #222222;}
</style>