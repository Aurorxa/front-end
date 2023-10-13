<template>
  <div class="app">
    <!-- ① TopBar  -->
    <TopBar :products="products" @togglePage="currentData"/>
    <!-- ② 展示结果   -->
    <h2 v-if="current">当前页面是：{{ current }}页面</h2>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: 'App',
  components: {
    TopBar
  },
  data() {
    return {
      products: ["衣服", "鞋子", "裤子"],
      current: ''
    }
  },
  methods: {
    currentData(item) {
      this.current = item;
    }
  },

}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
