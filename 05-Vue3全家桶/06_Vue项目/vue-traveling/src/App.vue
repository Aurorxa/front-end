<template>
  <div class="app">
    <!--    -->
    <router-view></router-view>
    <router-link to="/">首页</router-link>
    <br>
    <router-link to="/favor">收藏</router-link>
    <br>
    <router-link to="/order">订单</router-link>
    <br>

    <router-link to="/message">消息</router-link>
    <br>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {

}
</style>
