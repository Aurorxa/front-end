<template>
  <h2>当前计数为：{{ count }}</h2>
  <h2>2倍计数为：{{ doubleCount }}</h2>
  <button @click="increment()">点我+1</button>
</template>

<script setup>
import useCounterStore from "@/store/counter";
import {toRefs} from "vue";

const counterStore = useCounterStore();

const {count, doubleCount, increment} = toRefs(counterStore);

</script>

<style lang="less" scoped>

</style>