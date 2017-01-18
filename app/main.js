'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Router
Vue.use(VueRouter)

import Hello from './components/Hello.vue'
import Account from './components/account/Account.vue'

const routes = [
  {
    path: '/',
    component: Hello
  }, {
    path: '/me',
    component: Account
  }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
