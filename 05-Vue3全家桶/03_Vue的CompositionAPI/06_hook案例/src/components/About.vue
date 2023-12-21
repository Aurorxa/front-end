<template>
  <h2>About组件</h2>
  <h2>当前计数：{{ count }}</h2>
  <button @click="increment">点我+1</button>
  <button @click="decrement">点我-1</button>
</template>

<script>
import useCount from '@/hooks/useCount'
import useTitle from "@/hooks/useTitle";
import {onActivated} from "vue";

export default {
  setup() {
    onActivated(() => {
      useTitle("关于")
    })
    return {
      ...useCount()
    }
  }
}

</script>

<style lang="less" scoped>

</style>