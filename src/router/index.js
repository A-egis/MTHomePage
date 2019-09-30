import Vue from 'vue'
import Router from 'vue-router'
import defalutPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defalutPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        }]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
