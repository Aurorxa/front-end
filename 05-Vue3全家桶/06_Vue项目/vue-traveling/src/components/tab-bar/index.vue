<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" routes>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="guide-o" to="/message">消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>

import {ref} from "vue"

const active = ref(0)

</script>

<style lang="less" scoped>

</style>