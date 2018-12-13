<template>
  <div id="app">
    <div class="wrap">
      <transition :name="name">
          <router-view/>
      </transition>
    </div>
    <footer class="footer">
      <tab></tab>
    </footer>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  data () {
    return {
      name: ''
    }
  },
  watch: {
    // 监听路由的变化
    $route (to, from) {
      // 若to的index大于from的index，则为前进效果，否则为后退效果
      this.name = to.meta.index > from.meta.index ? 'slide-left' : 'slide-right'
    }
  },
  components: {
    Tab
  }
}
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 44px;
    overflow: scroll;
  }

  .footer {
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    border-top: 1px solid #d9d9d9;
    background-color: #f9f9f9;
  }
</style>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  .slide-right-enter-active, .slide-right-leave-active,
  .slide-left-enter-active, .slide-left-leave-active {
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
  }
  .slide-right-enter,.slide-right-enter-active{
    animation: left-in 500ms;
  }
  .slide-right-leave-active {
    animation: left-out 500ms;
  }
  .slide-left-enter, .slide-left-enter-active{
    animation: right-in 500ms;
  }
  .slide-left-leave-active {
    animation: right-out 500ms;
  }

  @keyframes right-in {
    0% {
      transform: translate3d(100%, 0, 0);
      }
    100% {
      transform: translate3d(0px, 0, 0);
      }
  }
  @keyframes right-out {
    0% {
        transform: translate3d(0, 0, 0);
      }
    100% {
        transform: translate3d(-100%, 0, 0);
      }
  }
  @keyframes left-in {
    0% {
      transform: translate3d(-100%, 0, 0);
      }
    100% {
      transform: translate3d(0px, 0, 0);
      }
  }
  @keyframes left-out {
    0% {
        transform: translate3d(0, 0, 0);
      }
    100% {
        transform: translate3d(100%, 0, 0);
      }
  }

  .content {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
  }
</style>
