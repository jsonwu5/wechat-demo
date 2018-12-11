import Vue from 'vue'
import Router from 'vue-router'
import Message from 'components/message/message'
import Me from 'components/me/me'
import Home from 'components/home/home'
import Admin from 'components/admin/admin'
import Error from 'components/error/error'
import User from 'components/user/user'

Vue.use(Router)

export let baseRoutes = [
  {
    path: '/',
    redirect: 'message'
  },
  {
    path: '/message',
    name: 'Message',
    // 定义当前路由的层级，有小到大
    meta: {index: 0},
    component: Message
  },
  {
    path: '/me',
    name: 'Me',
    meta: {index: 1},
    component: Me,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'admin',
        component: Admin
      }
    ]
  },
  {
    path: '/404',
    name: 'Error',
    meta: {index: 3},
    component: Error
  },
  {
    path: '*',
    redirect: '/error'
  }
]

export default new Router({
  routes: baseRoutes
})
