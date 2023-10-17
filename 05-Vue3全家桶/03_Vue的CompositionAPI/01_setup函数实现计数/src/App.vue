<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    let count = ref(100)
    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }
    return {
      count,
      increment,
      decrement
    }
  }
}
</script>

<style lang="less" scoped>

</style>