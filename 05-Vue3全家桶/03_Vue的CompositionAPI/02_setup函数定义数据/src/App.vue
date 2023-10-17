<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改 message</button>
    <h2>当前计数为：{{ state.count }}</h2>
    <button @click="increment">点我+1</button>
    <h2>当前计数为：{{ count }}</h2>
    <button @click="increment">点我+1</button>
  </div>
</template>

<script>

import {reactive, ref} from "vue";

export default {
  setup() {
    // 定义普通的数据：可以正常的被使用
    // 缺点：数据不是响应式的
    let message = "Hello World"

    // 定义响应式的数据
    // reactive 用于定义复杂类型的数据
    let state = reactive({
      count: 0
    })

    // 定义响应式数据
    // ref
    let count = ref(0)

    const changeMessage = () => {
      message = "Hello Vue~"
      console.log('changeMessage', message)
    }

    const increment = () => {
      state.count++
      count.value++
      console.log('increment', state.count)
      console.log('increment', count.value)
    }

    return {
      message,
      state,
      count,
      changeMessage,
      increment
    }
  }
}
</script>

<style lang="less" scoped>

</style>