import Vue from 'vue'
import Router from 'vue-router'
import Reader from '@/components/Reader'
import Home from '@/components/Home'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reader',
      name: 'Reader',
      component: Reader
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
