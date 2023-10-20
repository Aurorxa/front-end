<template>
  <div class="home">
    <h2>Home组件</h2>
    <h2>当前 2 倍计数：{{ doubleCount }}</h2>
    <button @click="handleClick">点我+1</button>
    <button @click="handleClick2">点我+n</button>
  </div>
</template>

<script setup>

import {useStore} from "vuex";
import useGetters from "@/hooks/useGetters";

const store = useStore()
const handleClick = () => {
  store.commit("increment")
}

const handleClick2 = () => {
  let num = 10
  store.commit("incrementPayload", num)
}

const {doubleCount} = useGetters(["doubleCount"])

</script>

<style lang="less" scoped>
.home {
  background-color: skyblue;
}
</style>