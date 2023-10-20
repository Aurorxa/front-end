<template>
  <div class="home">
    <h2>Home组件</h2>
    <h2>当前 2 倍计数：{{ doubleCount }}</h2>
    <button @click="handleClick">点我+1</button>
  </div>
</template>

<script setup>

import {mapGetters, useStore} from "vuex";
import {computed} from "vue";
import useGetters from "@/hooks/useGetters";

const store = useStore()
const handleClick = () => {
  store.commit("increment")
}
useGetters(mapGetters(["doubleCount"]));

const doubleCount = computed(mapGetters(["doubleCount"]).doubleCount.bind({$store: store}))
</script>

<style lang="less" scoped>
.home {
  background-color: skyblue;
}
</style>