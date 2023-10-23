<template>
  <h2>当前计数为：{{ useCounter.count }}</h2>
  <h2>2倍计数为：{{ useCounter.double }}</h2>
  <button @click="useCounter.increment()">点我+1</button>
</template>

<script setup>
import {useCounterStore} from "@/store";

const useCounter = useCounterStore();

</script>

<style lang="less" scoped>

</style>