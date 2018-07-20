import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/regist'
import Login from '@/components/login'
import Index from '@/components/index'
import Home from '@/components/home'
import Integral from '@/components/integral'
import IntegralDealList from '@/components/IntegralDealList'
import Shopcar from '@/components/shopcar'
import Mine from '@/components/mine'
import Myteam from '@/components/myteam'
import UserDetails from '@/components/userDetails'
import Personal from '@/components/personal'
import PersonalData from '@/components/personalData'
import BankAccount from '@/components/bankAccount'
import Bank from '@/components/bank'
import Wallet from '@/components/wallet'
import Addwallet from '@/components/addwallet'
import BuyOrderDetails from '@/components/buyOrderDetails.vue'
import SaleOrderDetails from '@/components/saleOrderDetails'
import IntegralTrans from '@/components/integralTrans'
import BuyinDetail from '@/components/buyinDetail'
import WillPayList from '@/components/willPayList'
import BuyPayMoney from '@/components/buyPayMoney'
import Addbank from '@/components/addbank'
import Fortune from '@/components/fortune'
import MyIntegral from '@/components/myIntegral'
import Ordered from '@/components/ordered'
import Orbuying from '@/components/orbuying'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',name: 'regist',component: Regist,meta: {title: '注册'}},
    {path: '/login',name: 'login',component: Login,meta: {title: '登录'}},
    {path: '/index',name: 'index',component: Index,meta: {title: '互助商城'}, children:[
    	{path: '/home',name: 'home',component: Home, meta: {title: '互助商城'}},
    	{path: '/integral',name: 'integral',component: Integral, meta: {title: '互助商城'}},
    	{path: '/shopcar',name: 'shopcar',component: Shopcar, meta: {title: '互助商城'}},
    	{path: '/mine',name: 'mine',component: Mine, meta: {title: '互助商城'}}
    ]},
    {path: '/IntegralDealList',name: 'IntegralDealList',component: IntegralDealList,meta: {title: '积分交易情况'}},
    {path: '/myteam',name: 'myteam',component: Myteam,meta: {title: '我的团队'}},
    {path: '/userDetails',name: 'userDetails',component: UserDetails,meta: {title: '用户详情'}},
    {path: '/personal',name: 'personal',component: Personal,meta: {title: '个人资料'}},
    {path: '/personalData',name: 'personalData',component: PersonalData,meta: {title: '个人资料'}},
    {path: '/bankAccount',name: 'bankAccount',component: BankAccount,meta: {title: '银行账户'}},
    {path: '/bank',name: 'bank',component: Bank,meta: {title: '选择银行'}},
    {path: '/wallet',name: 'wallet',component: Wallet,meta: {title: '钱包地址'}},
    {path: '/addwallet',name: 'addwallet',component: Addwallet,meta: {title: '添加钱包地址'}},
 		{path: '/addbank',name: 'addbank',component: Addbank,meta: {title: '选择银行'}},
 		{path: '/fortune',name: 'fortune',component: Fortune,meta: {title: '福币收益'}},
 		{path: '/ordered',name: 'ordered',component: Ordered,meta: {title: '预约交易'}},
 		{path: '/orbuying',name: 'orbuying',component: Orbuying,meta: {title: '预约买入'}},
 		{path: '/myIntegral',name: 'myIntegral',component: MyIntegral,meta: {title: '积分'}},
    {path: '/buyOrderDetails',name: 'buyOrderDetails',component: BuyOrderDetails,meta: {title: '买入订单'}},
    {path: '/saleOrderDetails',name: 'saleOrderDetails',component: SaleOrderDetails,meta: {title: '卖出订单'}},
    {path: '/integralTrans',name: 'integralTrans',component: IntegralTrans,meta: {title: '买入'}},
    {path: '/buyinDetail',name: 'buyinDetail',component: BuyinDetail,meta: {title: '买入'}},
    {path: '/willPayList',name: 'willPayList',component: WillPayList,meta: {title: '预付款列表'}},
    {path: '/buyPayMoney',name: 'buyPayMoney',component: BuyPayMoney,meta: {title: '预付款列表'}},
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
