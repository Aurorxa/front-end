<template>
  <h2>当前计数为：{{ useCounterStore.count }}</h2>
  <h2>2倍计数为：{{ useCounterStore.doubleCount }}</h2>
  <button @click="useCounterStore.increment()">点我+1</button>
</template>

<script setup>
import {useCounter} from "@/store";

const useCounterStore = useCounter();

</script>

<style lang="less" scoped>

</style>