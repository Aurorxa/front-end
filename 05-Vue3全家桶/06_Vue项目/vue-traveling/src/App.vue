<template>
  <div class="app">
    <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script setup>
import TabBar from "@/components/TabBar/index.vue";
</script>

<style scoped>

</style>
