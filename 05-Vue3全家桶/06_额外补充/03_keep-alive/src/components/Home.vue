<template>
  <h2>Home组件</h2>
  <h2>当前计数为：{{ count }}</h2>
  <button @click="count++">点我+1</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0
    }
  },
  unmounted() {
    console.log("Home ... unmounted")
  }
}
</script>


<style lang="less" scoped>

</style>