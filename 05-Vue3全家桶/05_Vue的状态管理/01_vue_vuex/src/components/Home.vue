<template>
  <div class="home">
    <h2>Home组件</h2>
    <button @click="handleClick">点我+1</button>
  </div>
</template>

<script setup>

import {useStore} from "vuex";

const store = useStore()
const handleClick = () => {
  store.commit("increment")
}
</script>

<style lang="less" scoped>
.home {
  background-color: skyblue;
}
</style>