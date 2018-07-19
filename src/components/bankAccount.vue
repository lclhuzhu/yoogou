<template>
	<div class="bankAccount">
		<van-nav-bar title="银行账户" left-text="返回" left-arrow @click-left="onClickLeft" class='top_nav'/>
		<div class="flex_between">
			<p>持卡人姓名</p>
			<input type="text" placeholder="请填写" v-model="name" @keyup="namekey"/>
		</div>
		<div class="flex_between">
			<p>所属银行</p>
			<input type="text" placeholder="请填写" v-model="bank" @keyup="bankkey"/>
		</div>
		<div class="flex_between">
			<p>支行名称</p>
			<input type="text" placeholder="请填写" v-model="branch" @keyup="branchkey"/>
		</div>
		<div class="flex_between">
			<p>卡号</p>
			<input type="text" placeholder="请填写" v-model="card" @keyup="cardkey"/>
		</div>
		<div class="peo_bom">
			<div class="sub" v-if="name && bank && branch && card" @click="sub">
				保存
			</div>
			<div class="sub opy4" v-else="">
				保存
			</div>
		</div>
		<div class="peo_bom" v-if="0">
			<div class="sub opy4">
				修改银行信息
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'bankAccount',
		data () {
			return {
				name: '',
				bank: '',
				branch: '',
				card: ''
			}
		},
		created () {
			if(localStorage.setItem('name',this.name)){
				this.name = localStorage.setItem('name',this.name)
			}
			if(localStorage.setItem('name',this.bank)){
				this.bank = localStorage.setItem('name',this.bank)
			}
			if(localStorage.setItem('name',this.branch)){
				this.branch = localStorage.setItem('name',this.branch)
			}
			if(localStorage.setItem('name',this.card)){
				this.card = localStorage.setItem('name',this.card)
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		      history.go(-1)
		    },
		    namekey () {
		    	localStorage.setItem('name',this.name)
		    },
		    bankkey () {
		    	localStorage.setItem('bank',this.bank)
		    },
		    branchkey () {
		    	localStorage.setItem('branch',this.branch)
		    },
		    cardkey () {
		    	localStorage.setItem('card',this.card)
		    },
		    //保存
		    sub () {
	          	that.codeGet()
	          	return false
		        that.$axios({
		      	  	url: '/leaderapi/sendVerifyCode.action',
		       		method: 'POST',
		        	data: qs.stringify({
		          		name: that.name,
		          		alipay: that.alipay
		        	})
		      	}).then(res => {
			        if (res.data.status == 0) {
			          	that.$router.push({path:'/mine'})
			        } else {
			          	Toast(res.data.message)
			        }
		      	})
		    }
		}
	})
</script>

<style scoped>
.opy4{opacity: .4;}
.flex_between{background: #FFFFFF;padding: .3rem;}
.flex_between p{color: #999999;}
.flex_between input{background: #FFFFFF;border: 0;text-align: right;}
.peo_bom{background: #FFFFFF;position: fixed;bottom: 0;padding: .26rem .5rem;width: 100%;}
.sub{width: 100%;height: .88rem;line-height: .88rem; background-image: linear-gradient(-90deg, #FF9400 0%, #FF6808 100%);border-radius: 44px;text-align: center;color: #fff;font-size: .32rem;}
</style>