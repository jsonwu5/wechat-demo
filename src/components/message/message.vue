<template>
  <div class="content">
    <div>
      <span>这是信息页面</span>
      <router-link tag="button" class="btn"  to="/me" @click="addAdminRouter">管理员登录</router-link>
      <router-link tag="button" class="btn"  to="/me" @click="addUserRouter">用户登录</router-link>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import baseRoutes from 'router/index'
import Me from 'components/me/me'
import Home from 'components/home/home'
import Admin from 'components/admin/admin'
import User from 'components/user/user'
export default {
  name: 'message',
  methods: {
    resetRouter () {
      let newRouter = new VueRouter({
        routes: baseRoutes
      })
      this.$router.matcher = newRouter.matcher
    },
    addAdminRouter () {
      this.resetRouter()
      this.$router.addRoutes([
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
              path: 'admin',
              component: Admin
            }
          ]
        }
      ])
    },
    addUserRouter () {
      this.resetRouter()
      this.$router.addRoutes([
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
            }
          ]
        }
      ])
    }
  }
}
</script>

<style scoped>
  .content {
    background-color: #d1e1f4;
  }

  .btn {
    padding: 5px 10px;
  }
</style>
