<template>
	<div class="bank">
		<van-nav-bar title="选择银行" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_gs@2x.png"/>
				<p class="yhname">工商银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_ny@2x.png"/>
				<p class="yhname">农业银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_jt@2x.png"/>
				<p class="yhname">交通银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_js@2x.png"/>
				<p class="yhname">建设银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_zg@2x.png"/>
				<p class="yhname">中国银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_zx@2x.png"/>
				<p class="yhname">中信银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_gd@2x.png"/>
				<p class="yhname">光大银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_xy@2x.png"/>
				<p class="yhname">兴业银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list">
				<img src="../assets/icon_ms@2x.png"/>
				<p class="yhname">民生银行</p>				
			</div>
		</div>
		<div class="list_top">
			<div class="list bor0">
				<img src="../assets/icon_tj@2x.png"/>
				<p class="yhname">添加银行</p>				
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'bank',
		data () {
			return {
				
			}
		},
		methods: {
			//返回
		    onClickLeft () {
		        history.go(-1)
		    },
		}
	})
</script>

<style scoped>
.list_top{padding: 0 .3rem;background: #FFFFFF;}
.list{width: 100%;height: .96rem;color: #222222;display: flex;align-items: center;background: #fff;border-bottom: 2px solid #E5E5E5;}
.bor0{border: 0;}
.yhname{margin-left: .3rem;}
</style>