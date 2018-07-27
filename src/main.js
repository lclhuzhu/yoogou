// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.prototype.$axios = axios

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
		config => {
        if (localStorage.getItem('userId')) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = localStorage.getItem('userId')
        }else{
        	router.replace({ path: 'login' })
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
if (303 == error.response.status) {
    // ElementUI.Message.error("session过期，请登录！");
    delCookie("username")
    router.push({path: '/login'})
}
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

