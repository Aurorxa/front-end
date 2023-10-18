<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <h2>当前计数：{{ count }}</h2>
    <button @click="increment">点我+1</button>
  </div>
</template>

<script setup>
// ① 所有编写在顶层中的代码，都会默认暴露给 template 模板
import {ref} from "vue";

const message = "Hello World"

const count = ref(0)
const increment = () => {
  count.value++
}

</script>

<style lang="less" scoped>

</style>