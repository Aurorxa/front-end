<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCount from '@/hooks/useCount'

export default {
  setup() {
    return {
      ...useCount()
    }
  }
}
</script>

<style lang="less" scoped>

</style>