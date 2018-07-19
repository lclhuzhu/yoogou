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
import BuyOrderDetails from '@/components/buyOrderDetails.vue'
import SaleOrderDetails from '@/components/saleOrderDetails'
import IntegralTrans from '@/components/integralTrans'
import BuyinDetail from '@/components/buyinDetail'
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
    {path: '/buyOrderDetails',name: 'buyOrderDetails',component: BuyOrderDetails,meta: {title: '买入订单'}},
    {path: '/saleOrderDetails',name: 'saleOrderDetails',component: SaleOrderDetails,meta: {title: '卖出订单'}},
    {path: '/integralTrans',name: 'integralTrans',component: IntegralTrans,meta: {title: '买入'}},
    {path: '/buyinDetail',name: 'buyinDetail',component: BuyinDetail,meta: {title: '买入'}},
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
