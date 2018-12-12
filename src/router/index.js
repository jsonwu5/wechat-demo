import Vue from 'vue'
import Router from 'vue-router'
import Message from 'components/message/message'
import Me from 'components/me/me'
import Home from 'components/home/home'
import Error from 'components/error/error'
import Admin from 'components/admin/admin'
import User from 'components/user/user'

Vue.use(Router)

// 路由映射表
export const routerMap = {
  Admin: Admin,
  User: User
}

// 基本路由，包含所有无需权限即可访问的路由
export let baseRoute = [
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
        path: 'user',
        component: User
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    meta: {index: 2},
    component: Home
  },
  {
    path: '/404',
    name: 'Error',
    meta: {index: 3},
    component: Error
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  routes: baseRoute
})
