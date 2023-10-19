<template>
  <div class="app">
    <h2>Hello App</h2>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <br>
      <router-link to="/about">关于</router-link>
      <br>
      <router-link to="/user/1">1用户</router-link>
      <br>
      <router-link to="/user/2">2用户</router-link>
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.router-link-active {
  color: red;
}
</style>