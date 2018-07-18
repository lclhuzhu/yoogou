<template>
	<div class="index">
		<div class="heard">
			<van-swipe :autoplay="3000">
			  <van-swipe-item>1</van-swipe-item>
			  <van-swipe-item>2</van-swipe-item>
			  <van-swipe-item>3</van-swipe-item>
			  <van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</div>
		<div class="menu">
			<ul>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							附近商家
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							线上商城
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							飞机票
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							火车票
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							手机充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							加油卡
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							流量充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							固话充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							违章查询
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/home'>
						<div class="menu-img">
							<img src="../../build/logo.png"/>
						</div>
						<span class="menu-span">
							罚单代缴
						</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="notice">
			<img src="../../build/logo.png"/>
		</div>
		<div class="integral">
			<div class="integral-icont">
				积分购
			</div>
			<ul>
				<li>
					<div class="integral-mairu">
						<ul>
							<li>
								<p>买入商品</p>
								<span>PURCHUSE</span>
							</li>
							<li>
								<div class="integral-mairu-img">
									<img src="../../build/logo.png"/>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<div class="integral-maichu">
						<ul>
							<li>
								<p>卖出产品</p>
								<span>SELLOUT</span>
							</li>
							<li>
								<div class="integral-maichu-img">
									<img src="../../build/logo.png"/>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default({
		data() {
		    return {
//		      images: [];
    		}
  		},
		methods: {
		    onChange(index) {
		      Toast('当前 Swipe 索引：' + index);
    		}
  		}
	})
</script>

<style scoped>
	.heard{
		height: 3.52rem;
		width: 100%;
		border: 1px solid #42B983;
		box-sizing: border-box;
		
	}
	.van-swipe{
			width: 100%;
			height: 100%;
		}
	.menu{
		height: 3.9rem;
		width: 100%;
		border: 1px solid #42B983;
		box-sizing: border-box;
	}
	.menu ul li{
		width: 20%;
		height: 1.94rem;
		text-align: center;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	.menu-img{
		width: 0.88rem;
		height: 0.88rem;
		margin: 0 auto;
		margin-top: 0.48rem;
		box-sizing: border-box;
		border: 0.5px solid #4A4A4A;
	}
	.menu-img img{
		width: 100%;
		height: 100%;
		
	}
	.menu-span{
		
	}
	.notice{
		height: 2rem;
		width: 100%;
		margin-top: 0.2rem;
		border: 1px solid #42B983;
		box-sizing: border-box;
	}
	.notice img{
		width: 100%;
		height: 100%;
	}
	/*============积分购买===================*/
	.integral{
		height: 3.2rem;
		width: 100%;
		margin-top: 0.2rem;
		border: 1px solid #42B983;
		box-sizing: border-box;
	}
	.integral-icont{
		width: 1.44rem;
		height: 0.48rem;
		color: #FFFFFF;
		background-color: #FF6E07;
		position: absolute;
		border-bottom-right-radius: 0.24rem;
		text-align:center ;
	}
	.integral ul{
		width: 100%;
		height: 100%;
	}
	.integral ul li{
		width: 50%;
		height: 100%;
		display: block;
		float: left;
		box-sizing: border-box;
	}
	/*====买入======*/
	.integral-mairu{
		width: 100%;
		height: 100%;
	}
	.integral-mairu ul li{
		width: 50%;
		height: 100%;
		text-align: center;
		display: block;
		float: left;
		border: 1px solid #3dede3;
		box-sizing: border-box;
	}
	.integral-mairu p{
		margin-top: 1.08rem;
	}
	.integral-mairu span{
		color:rgba(204,204,204,0.40);
	}
	.integral-mairu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.64rem;
	}
	.integral-mairu-img img{
		width: 100%;
		height: 100%;
	}
	/*====卖出======*/
	.integral-maichu{
		width: 100%;
		height: 100%;
	}
	.integral-maichu ul li{
		width: 50%;
		height: 100%;
		text-align: center;
		display: block;
		float: left;
		border: 1px solid #3dede3;
		box-sizing: border-box;
	}
	.integral-maichu p{
		margin-top: 1.08rem;
	}
	.integral-maichu span{
		color:rgba(204,204,204,0.40);
	}
	.integral-maichu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.64rem;
	}
	.integral-maichu-img img{
		width: 100%;
		height: 100%;
	}
	/*=============底部导航===============*/
	.bottom{
		height: 0.98rem;
		width: 100%;
		position: fixed;
		bottom: 0px;
	}
	.bottom ul li{
		width: 25%;
		text-align: center;
		display: block;
		float: left;
		box-sizing: border-box;
	}
</style>