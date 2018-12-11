<template>
  <div class="tab">
    <router-link tag="div" class="tab-link" to="/message">
      <span class="tab-item">微信</span>
    </router-link>
    <router-link tag="div" class="tab-link" to="/me">
      <span class="tab-item">我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped>
  .tab {
    border-top: 1px solid #a8a7af;
    background-color: whitesmoke;
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    flex: 0 0 auto;
    position: absolute;
    bottom: 0;
  }

  .tab-link {
    flex: 1;
    text-align: center;
  }

  .router-link-active .tab-item {
    color: #4bbe21;
    border-bottom: 2px solid #4bbe21;
  }

</style>
