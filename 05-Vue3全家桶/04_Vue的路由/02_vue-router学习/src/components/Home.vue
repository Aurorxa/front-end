<template>
  <div class="home">
    <h2>我是 Home 组件</h2>
    <div class="nav">
      <router-link to="/home/recommend">今日推荐</router-link>
      <br>
      <router-link to="/home/ranking">排行榜</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home {
  background-color: skyblue;
}
</style>