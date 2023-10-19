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
      <br>
      <!--  其它元素跳转    -->
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
const homeClick = () => {
  router.push("/home")
}

const aboutClick = () => {
  router.push("/about")
}

</script>

<style lang="less" scoped>

.router-link-active {
  color: red;
}
</style>