<template>
  <div class="app">
    <h2>Hello App</h2>
    <div class="nav">
      <!--
        使用 router-link 组件进行导航
          通过传递 `to` 来指定链接
          `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签
      -->
      <router-link to="/home">Home组件</router-link>
      <br>
      <router-link to="/about">About组件</router-link>
    </div>
    <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

</style>