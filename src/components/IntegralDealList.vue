<template>
	<div class="ntegral-deal-list">
		<van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<van-tabs v-model="active" @click="onClick">
		  <van-tab v-for="index in 2" :title="'选项 ' + index"></van-tab>
		</van-tabs>
		<div class="" v-if="checkIndex == 0">
			0
		</div>
		<div class="" v-if="checkIndex == 1">
			1
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
		    return {
		      active: 2,
		      title:'',
		      checkIndex:''
		    }
		},
	  	methods: {
		    onClickLeft() {
//		      Toast('返回');
		    },
		    onClickRight() {
//		      Toast('按钮');
		    },
		    onClick(index, title) {
		       this.checkIndex = index
		    }
	  	}
	}
</script>
	
<style>
</style>