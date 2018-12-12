<template>
  <div class="content">
    <div class="wrap">
      <span class="text">这是我的页面</span><br/>
      <router-link tag="a" class="url" to="/me/user">访问子页面</router-link><br/>
      <a class="url" href="https://github.com/jsonwu5/wechat-demo">Github</a>
      <div class="child">
        <router-view></router-view>
      </div>
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

  .url {
    border: 1px solid #ff9300;
    border-radius: 4px;
    padding: 5px;
    color: #ff9300;
    text-decoration: none;
    width: 100px;
    margin: 0 auto;
  }

  .child {
    width: 100%;
    height: 100px;
  }
</style>
