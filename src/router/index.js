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
import IntegerSaleMain from '@/components/IntegerSaleMain'
import IntegerSaleGoods from '@/components/IntegerSaleGoods'
import IntegerSaleIncome from '@/components/IntegerSaleIncome'
import WillPayList from '@/components/willPayList'
import BuyPayMoney from '@/components/buyPayMoney'
import Addbank from '@/components/addbank'
import Fortune from '@/components/fortune'
import MyIntegral from '@/components/myIntegral'
import Ordered from '@/components/ordered'
import Orbuying from '@/components/orbuying'
import Orselling from '@/components/orselling'
import SecondLevel from '@/components/secondLevel'
import Secondnav from '@/components/secondnav'
import Modifypas from '@/components/modifypas'
import Forgetpas from '@/components/forgetpas'
import Customer from '@/components/customer'
import Membereg from '@/components/membereg'
import ReceiveDetail from '@/components/receiveDetail'
import Trusteeship from '@/components/trusteeship'
import None from '@/components/none'

Vue.use(Router)

const router = new Router({
  routes: [
  {path: '/',name: 'login',component: Login,meta: {title: '登录'}},
    {path: '/regist',name: 'regist',component: Regist,meta: {title: '注册'}},
    {path: '/none',name: 'none',component: None,meta: {title: '海汇'}},
    {path: '/index',name: 'index',component: Index,meta: {title: '海汇'}, children:[
    	{path: '/home',name: 'home',component: Home, meta: {title: '海汇'}},
    	{path: '/integral',name: 'integral',component: Integral, meta: {title: '海汇'}},
    	{path: '/shopcar',name: 'shopcar',component: Shopcar, meta: {title: '海汇'}},
    	{path: '/mine',name: 'mine',component: Mine, meta: {title: '海汇'}}
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
 		{path: '/orselling',name: 'orselling',component: Orselling,meta: {title: '预约卖出'}},
 		{path: '/secondLevel',name: 'secondLevel',component: SecondLevel,meta: {title: '二级密码'}},
 		{path: '/secondnav',name: 'secondnav',component: Secondnav,meta: {title: '二级密码'}},
 		{path: '/modifypas',name: 'modifypas',component: Modifypas,meta: {title: '修改二级密码'}},
 		{path: '/forgetpas',name: 'forgetpas',component: Forgetpas,meta: {title: '找回二级密码'}},
 		{path: '/customer',name: 'customer',component: Customer,meta: {title: '客服列表'}},
 		{path: '/membereg',name: 'membereg',component: Membereg,meta: {title: '会员注册'}},
 		{path: '/trusteeship',name: 'trusteeship',component: Trusteeship,meta: {title: '积分'}},
 		{path: '/myIntegral',name: 'myIntegral',component: MyIntegral,meta: {title: '积分'}},
    {path: '/buyOrderDetails',name: 'buyOrderDetails',component: BuyOrderDetails,meta: {title: '买入订单'}},
    {path: '/saleOrderDetails',name: 'saleOrderDetails',component: SaleOrderDetails,meta: {title: '卖出订单'}},
    {path: '/integralTrans',name: 'integralTrans',component: IntegralTrans,meta: {title: '买入'}},
    {path: '/buyinDetail',name: 'buyinDetail',component: BuyinDetail,meta: {title: '买入'}},
    {path: '/integerSaleMain',name: 'integerSaleMain',component: IntegerSaleMain,meta: {title: '卖出'}},
    {path: '/integerSaleGoods',name: 'integerSaleGoods',component: IntegerSaleGoods,meta: {title: '选择卖出订单'}},
    {path: '/integerSaleIncome',name: 'integerSaleIncome',component: IntegerSaleIncome,meta: {title: '直接收益卖出'}},
    {path: '/willPayList',name: 'willPayList',component: WillPayList,meta: {title: '预付款列表'}},
    {path: '/buyPayMoney',name: 'buyPayMoney',component: BuyPayMoney,meta: {title: '预付款列表'}},
    {path: '/receiveDetail',name: 'receiveDetail',component: ReceiveDetail,meta: {title: '预付款列表'}},
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
