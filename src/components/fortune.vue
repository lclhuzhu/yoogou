<template>
	<div class="fortune">
		<van-nav-bar title="汇币收益" left-text="返回" left-arrow @click-left="onClickLeft"/>
		<van-list class="all li_box" v-model="loading" :finished="finished" @load="onLoad">
			<div class="" v-for="(item, index) in list" :key='item.msg'>
				<p class="top_p">{{ item.msg }}</p>
				<div class="top_box">
					<div class="top_com" v-for="(dateList, index) in item.list" :key='index'>
						<p class="date_p1">{{ dateList.week }}</p>
						<p class="date_p2">{{ dateList.money }}</p>
					</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import qs from 'qs'
	export default({
		name: 'fortune',
		data () {
			return {
				list: [],					//月份列表
				pageNum: 1,					//当前页数
				loading: false,
      			finished: false
			}
		},
		created () {
			this.addlist(1)
		},
		methods: {
			onClickLeft () {
				history.go(-1)
			},
			//加载
			onLoad() {
				let that = this
				let pageNum = that.pageNum
				setTimeout(() => {
			        that.addlist(pageNum)
		      	}, 500)
		    },
			//获取列表
			addlist (pageNum) {
				let that = this
				that.pageNum = that.pageNum + 1
				that.$axios({
			        url: '/api/app/coinsRecord/findCoinRecord',
			        method: 'POST',
			        data: qs.stringify({
			        	pageNum: pageNum,
			        	userId: localStorage.getItem('userId'),
			        	pageSize: 5
			        })
			    }).then(res => {
			    	if(res.data.code == 0){
			    		for (let i = 0; i < res.data.data.length; i++) {
				          	that.list.push(res.data.data[i]);
				      	}
			    		that.loading = false
			    		if ( pageNum >= res.data.page.pages) {
			    			that.finished = true
			    		}
			    	} else {
			    		Toast(res.data.msg)	
			    	}
			    })
			},
		}
	})
</script>

<style scoped>
.top_p{color: #999999;padding: .1rem .3rem;}
.top_box{width: 100%;height: 4rem;background: #FFFFFF;display: flex;flex-direction: column;justify-content: space-between;padding: .36rem .3rem;}
.top_com{display: flex;justify-content: space-between;width: 100%;}
.date_p1{color: #999999;}
.date_p2{color: #222222;;}
</style>