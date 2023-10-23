<template>
  <h2>当前计数为：{{ counterStore.count }}</h2>
  <h2>2倍计数为：{{ counterStore.doubleCount }}</h2>
  <button @click="counterStore.increment()">点我+1</button>
</template>

<script setup>
import useCounterStore from "@/store/counter";

const counterStore = useCounterStore();

</script>

<style lang="less" scoped>

</style>