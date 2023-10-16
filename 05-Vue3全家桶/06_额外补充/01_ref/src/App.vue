<template>
  <div class="app">
    <h2 ref="title">{{ message }}</h2>
    <button @click="change">修改</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      message: 'Hello World',
      count: 0
    }
  },
  methods: {
    change() {
      // 获取 h2 元素
      console.log('@', this.$refs.title)
    }
  }
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
