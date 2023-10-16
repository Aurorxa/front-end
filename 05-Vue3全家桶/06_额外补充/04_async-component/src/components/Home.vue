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
  created() {
    console.log("Home ... created")
  },
  unmounted() {
    console.log("Home ... unmounted")
  },
  /* 对于保持 keep-alive 组件的切换进行监听 */
  activated() {
    console.log("Home... activated")
  },
  deactivated() {
    console.log("Home... deactivated")
  }
}
</script>


<style lang="less" scoped>

</style>