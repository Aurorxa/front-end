<template>
  <div class="app">
    <h2 ref="title">{{ message }}</h2>
    <button @click="change">修改</button>
    <Banner ref="banner"></Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: 'App',
  components: {
    Banner
  },
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
      // 获取 Banner 组件实例
      console.log('@', this.$refs.banner)
      this.$refs.banner.bannerClick()
    }
  }
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
