<template>
	<div class="home">
		<van-nav-bar class='til' title="海汇"/>
		<div class="heard">
			<van-swipe :autoplay="3000">
			  <van-swipe-item><img class="swip_img" src="@/assets/banner@2x.png"/></van-swipe-item>
			  <van-swipe-item><img class="swip_img" src="@/assets/banner@2x.png"/></van-swipe-item>
			  <van-swipe-item><img class="swip_img" src="@/assets/banner@2x.png"/></van-swipe-item>
			  <van-swipe-item><img class="swip_img" src="@/assets/banner@2x.png"/></van-swipe-item>
			</van-swipe>
		</div>
		<div class="menu">
			<ul>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/fjicon@2x.png"/>
						</div>
						<span class="menu-span">
							附近商家
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/xsicon@2x.png"/>
						</div>
						<span class="menu-span">
							线上商城
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/fjpicon@2x.png"/>
						</div>
						<span class="menu-span">
							飞机票
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/hcicon@2x.png"/>
						</div>
						<span class="menu-span">
							火车票
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/sjicon@2x.png"/>
						</div>
						<span class="menu-span">
							手机充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/jyicon@2x.png"/>
						</div>
						<span class="menu-span">
							加油卡
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/llicon@2x.png"/>
						</div>
						<span class="menu-span">
							流量充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/ghicon@2x.png"/>
						</div>
						<span class="menu-span">
							固话充值
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/wzicon@2x.png"/>
						</div>
						<span class="menu-span">
							违章查询
						</span>
					</router-link>
				</li>
				<li>
					<router-link to='/none'>
						<div class="menu-img">
							<img src="@/assets/fdicon@2x.png"/>
						</div>
						<span class="menu-span">
							罚单代缴
						</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="notice">
			<img src="@/assets/tgbanner@2x.png"/>
		</div>
		<div class="integral">
			<div class="integral-icont">
				积分购
			</div>
			<ul>
				<li>
					<div class="integral-mairu">
						<ul style="border-right: 2px solid #E5E5E5;" @click="linkmairu">
							<li>
								<p>买入商品</p>
								<span>PURCHUSE</span>
							</li>
							<li>
								<div class="integral-mairu-img">
									<img src="@/assets/smr@2x.png"/>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<div class="integral-maichu">
						<ul @click="linkmaichu">
							<li>
								<p>卖出产品</p>
								<span>SELLOUT</span>
							</li>
							<li>
								<div class="integral-maichu-img">
									<img src="@/assets/smc@2x.png"/>
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
		name:'home',
		data() {
		    return {
//		      images: [];
    		}
  		},
		methods: {
		    onChange(index) {
		      Toast('当前 Swipe 索引：' + index);
    		},
    		linkmairu () {
    			this.$router.push({path:'/integralTrans'})
    		},
    		linkmaichu () {
    			this.$router.push({path:'/integerSaleMain'})
    		}
  		}
	})
</script>

<style scoped>
	.heard{
		height: 3.52rem;
		width: 100%;
		box-sizing: border-box;		
	}
	.van-swipe{
			width: 100%;
			height: 100%;
		}
	.menu{
		height: 3.9rem;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
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
		box-sizing: border-box;
		background: #fff;
		padding: .2rem 0;
		position: relative;
	}
	.integral-icont{
		width: 1.44rem;
		height: 0.48rem;
		color: #FFFFFF;
		background-color: #FF6E07;
		position: absolute;
		top: 0;
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
		box-sizing: border-box;
	}
	.integral-mairu p{
		margin-top: .88rem;
	}
	.integral-mairu span{
		color:rgba(204,204,204,0.40);
	}
	.integral-mairu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.44rem;
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
	.swip_img{
		width: 100%;
		height: 100%;
	}
</style>