<template>
  <div class="app">
    <h2>当前计数为：{{ useCounter.count }}</h2>
    <h2>2倍计数为：{{ useCounter.double }}</h2>
    <button @click="increment">点我+1</button>
  </div>
</template>

<script setup>
import {useCounterStore} from "@/store";

const useCounter = useCounterStore();

const increment = () => {
  useCounter.increment()
}

</script>

<style lang="less">

</style>
