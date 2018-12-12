<template>
  <div class="content">
    <div>
      <span>这是信息页面</span>
      <button @click="addAdminRouter">管理员登录</button>
      <button @click="addUserRouter">用户登录</button>
    </div>
    <div class="wrap login">
      <span>{{loginMsg}}</span>
    </div>
    <div class="wrap">
      <div class="url">
        <router-link tag="a" to="/home">首页</router-link>
        <router-link tag="a" to="/admin">后台管理页面</router-link>
        <router-link tag="a" to="/user">用户页面</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import { baseRoute, routerMap } from 'router/index'
import { mappingRouters, adminRoutes, userRoutes } from '@/js/api'
export default {
  name: 'message',
  data () {
    return {
      loginMsg: '游客访问'
    }
  },
  methods: {
    resetRouter () {
      /**
       * 重置路由为基本路由，
       * 防止在添加admin路由后再添加user路由，
       * user可以访问到admin路由的问题
       * @type {VueRouter}
       */
      let newRouter = new VueRouter({
        routes: baseRoute
      })
      this.$router.matcher = newRouter.matcher
    },
    addAdminRouter () {
      /**
       * 添加admin权限的路由
       */
      this.resetRouter()
      // 将api返回的路由表映射到routerMap
      let routersMap = mappingRouters(routerMap, adminRoutes)
      this.$router.addRoutes(routersMap)
      this.loginMsg = '管理员已登录'
    },
    addUserRouter () {
      /**
       * 添加user权限的路由
       */
      this.resetRouter()
      let routersMap = mappingRouters(routerMap, userRoutes)
      this.$router.addRoutes(routersMap)
      this.loginMsg = '用户已登录'
    }
  }
}
</script>

<style scoped>
  .content {
    background-color: #d1e1f4;
  }

  .wrap {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .login {
    width: 100%;
    height: 50px;
  }

  .wrap .url a{
    border: 1px solid #ff9300;
    border-radius: 4px;
    padding: 5px;
    margin-right: 10px;
    color: #ff9300;
    text-decoration: none;
  }
</style>
