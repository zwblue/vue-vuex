import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },  {
      path: '/home',
      name: 'Home',
      component: Home
    },  {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
