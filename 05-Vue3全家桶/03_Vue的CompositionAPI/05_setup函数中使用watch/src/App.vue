<template>
  <h2>当前计数：{{ count }}</h2>
  <button @click="count++">点我+1</button>
  <hr>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  setup() {
    let count = ref(0)


    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    return {
      count
    }
  }
}
</script>

<style lang="less" scoped>

</style>