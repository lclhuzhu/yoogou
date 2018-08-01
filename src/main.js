// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.prototype.$axios = axios

// 全局请求头
if (localStorage.getItem('myPhone') && localStorage.getItem('myId')) {
	axios.defaults.headers.post['X-With-USER_PHONE'] = localStorage.getItem('myPhone')
	axios.defaults.headers.post['X-With-CLIENTID'] = localStorage.getItem('myId')
}

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
  store,
  components: { App },
  template: '<App/>'
})

