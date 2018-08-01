<template>
	<div class="bankAccount">
		<van-nav-bar title="银行账户" left-text="返回" left-arrow @click-left="onClickLeft" class='top_nav'/>
		<div class="flex_between">
			<p>持卡人姓名</p>
			<input type="text" placeholder="请填写" v-model="name" @keyup="namekey"/>
		</div>
		<div class="flex_between">
			<p>所属银行</p>
			<div style="color: #222;" @click="bankLink" v-if="bank != '选择银行'">{{ bank }}</div>
			<div @click="bankLink" v-else>{{ bank }}</div>
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
				name: '',					//用户名称
				bank: '选择银行',			//开户行
				branch: '',					//开户支行
				card: ''					//银行账户
			}
		},
		created () {
			this.getInfo()
			if(localStorage.getItem('name')){
				console.log(2)
				this.name = localStorage.getItem('name')
			}
			if(localStorage.getItem('bank')){
				this.bank = localStorage.getItem('bank')
			}
			if(localStorage.getItem('branch')){
				this.branch = localStorage.getItem('branch')
			}
			if(localStorage.getItem('card')){
				this.card = localStorage.getItem('card')
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		    	localStorage.removeItem('card')
	        	localStorage.removeItem('bank')
	        	localStorage.removeItem('branch')
	        	localStorage.removeItem('name')
		        this.$router.push({path:'/mine'})
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
		    //跳转选择银行
		    bankLink () {
		    	this.$router.push({path:'/bank'})
		    },
		    //获取信息
		    getInfo () {
		    	let that = this
		    	that.$axios({
		      	  	url: '/api/app/bankInfo/getInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		userId:localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {			        	
		          		that.card = res.data.data.account
		          		if (res.data.data.openBank) {
		          			that.bank = res.data.data.openBank		          			
		          		}
		          		that.branch = res.data.data.openBranchBank
		          		that.name = res.data.data.userName
		          		that.$nextTick(()=>{
		          			if(localStorage.getItem('name')){
								that.name = localStorage.getItem('name')
							}
							if(localStorage.getItem('bank')){
								that.bank = localStorage.getItem('bank')
							}
							if(localStorage.getItem('branch')){
								that.branch = localStorage.getItem('branch')
							}
							if(localStorage.getItem('card')){
								that.card = localStorage.getItem('card')
							}
		          		})
			        } else {
			          	Toast(res.data.msg)
			        }
		      	})
		    },
		    //保存
		    sub () {
	          	let that = this
		        that.$axios({
		      	  	url: '/api/app/bankInfo/insertInfo',
		       		method: 'POST',
		        	data: qs.stringify({
		          		account: that.card,
		          		openBank: that.bank,
		          		openBranchBank:that.branch,
		          		userName: that.name,
		          		userId:localStorage.getItem('userId')
		        	})
		      	}).then(res => {
			        if (res.data.code == 0) {
			        	localStorage.removeItem('card')
			        	localStorage.removeItem('bank')
			        	localStorage.removeItem('branch')
			        	localStorage.removeItem('name')
			          	Toast(res.data.msg)
			        } else {
			          	Toast(res.data.msg)
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