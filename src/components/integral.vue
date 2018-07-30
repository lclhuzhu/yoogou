<template>
<div id="integral">
	<van-nav-bar title="积分"/>
	<div class="integral">
		<div class="integral-icont">
			积分购
		</div>
		<ul style="padding: .2rem 0;">
			<router-link to="/integralTrans">
				<li style="border-right: 1px solid #E5E5E5;">
					<div class="integral-mairu">
						<ul>
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
			</router-link>
			<li @click="linkmyIntegral">
				<div class="integral-maichu">
					<ul>
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
	<router-link to="/IntegralDealList">
		<div class="integral-goods">
			<div class="flex_between_v">
				<img src="@/assets/jfpic@2x.png"/>
				<div class="integral-goods-text">
					<h3>积分交易情况</h3>
					<p>最新交易细节</p>
				</div>				
			</div>
			<img src="@/assets/right@2x.png"/>
		</div>
	</router-link>
</div>	
</template>

<script>
	export default({
		name: 'integral',
		methods: {
			linkmyIntegral () {
				this.$router.push({path:'/integerSaleMain'})			
			}
		}
	})
</script>

<style scoped>
	/*============积分购买===================*/
	#integral{overflow: hidden;}
	.integral{
		height: 3.2rem;
		width: 100%;
		background: #fff;
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
		margin-top: .88rem;
	}
	.integral-maichu span{
		color:rgba(204,204,204,0.40);
	}
	.integral-maichu-img{
		width: 1.46rem;
		height: 1.96rem;
		margin: 0 auto;
		margin-top: 0.44rem;
	}
	.integral-maichu-img img{
		width: 100%;
		height: 100%;
	}
	/*====积分购买情况===========*/
	.integral-goods{
		height: 1.6rem;
		border-top: 1px solid #e5e5e5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 .3rem;
		background: #FCFCFC;
	}
	.integral-goods-img{
		width: 0.9rem;
		height: 0.9rem;	
		float: left;
		margin: 0.4rem ;
		
	}
	.integral-goods-img img{
		width: 100%;
		height: 100%;
	}
	.integral-goods-text{
		width: 4rem;
		height: 0.9rem;
		margin-left: .4rem;
		line-height: 0.45rem;
	}
	.integral-goods-text p{
		color: #999999;
	}
	.next{
		float: right;
		position: relative;
		top: -0.6rem;
		right: 0.22rem;
	}
</style>