import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Axions from 'axios'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'

import './style/reset.css'

// Vue.use(Axions)
// Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
