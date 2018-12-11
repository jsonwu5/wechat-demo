<template>
  <div class="content">
    <div class="wrap">
      <span class="text">这是我的页面</span>
      <div>
        <router-link tag="a" class="btn"  to="/me/admin">后台管理页面</router-link>
        <router-link tag="a" class="btn"  to="/me/home">首页</router-link>
        <router-link tag="a" class="btn"  to="/me/user">用户个人页面</router-link>
      </div>
      <router-link></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me'
}
</script>

<style scoped>
  .content {
    background-color: #f9e8ff;
  }

  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .page {
    background-color: #10aeff;
    width: 100%;
    height: 200px;
  }
</style>
