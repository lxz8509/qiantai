// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式表
import 'normalize.css'
import axios from 'axios' //不是vue插件,导入之后只能在当前使用;
import api, { domain } from './js/api.js'
import './less/index.less'
import './assets/css/style.css'
Vue.use(ElementUI)
//配置默认域名:
axios.defaults.baseURL = domain
// 因为我们调用的接口跨域,默认情况下接口给我们设置的cookie无效的,为了让他们有效,我们必须添加此配置
axios.defaults.withCredentials = true
//为了方便,把axios和api添加到vue的原型里面去,将来vue的组件就可以直接使用了;
Vue.prototype.$http = axios
Vue.prototype.$api = api
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})