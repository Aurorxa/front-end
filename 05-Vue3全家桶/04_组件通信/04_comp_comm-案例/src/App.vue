<template>
  <div class="app">
    <TabBar :products="products" @togglePage="currentData"/>
    <h2 v-if="current">当前页面是：{{ current }}页面</h2>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";

export default {
  name: 'App',
  components: {
    TabBar
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
  background-color: pink;
}
</style>
