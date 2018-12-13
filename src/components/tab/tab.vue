<template>
  <div class="tab">
    <router-link tag="ul" class="tab-link" to="/message">
      <li class="tab-item">
        <span>微信</span>
      </li>
    </router-link>
    <router-link tag="ul" class="tab-link" to="/me">
      <li class="tab-item">
        <span>我</span>
      </li>
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
    width: 100%;
    height: 100%;
    font-size: 16px;
    display: flex;
    justify-content: center;
  }

  .tab-link {
    flex: 1;
    text-align: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .router-link-active .tab-item span{
    color: #4bbe21;
    border-bottom: 2px solid #4bbe21;
  }

</style>
