<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改 message</button>
  </div>
</template>

<script>

export default {
  setup() {
    // 定义普通的数据：可以正常的被使用
    // 缺点：数据不是响应式的
    let message = "Hello World"

    const changeMessage = () => {
      message = "Hello Vue~"
      console.log('changeMessage', message)
    }
    return {
      message,
      changeMessage
    }
  }
}
</script>

<style lang="less" scoped>

</style>