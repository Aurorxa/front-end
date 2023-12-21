<template>
  <div class="Layout">
    <!-- 二级路由出口 -->
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/star">收藏</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style scoped lang="less"></style>
