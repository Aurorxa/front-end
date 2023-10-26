<template>
  <div class="app">
    <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div class="tab-bar">
      <router-link to="/">首页</router-link>
      <br>
      <router-link to="/favor">收藏</router-link>
      <br>
      <router-link to="/order">订单</router-link>
      <br>
      <router-link to="/message">消息</router-link>
      <br>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {

}
</style>
