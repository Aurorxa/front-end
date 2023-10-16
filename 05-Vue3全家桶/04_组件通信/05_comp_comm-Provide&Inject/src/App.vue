<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script>

import Home from "@/components/Home.vue";

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      count: 10
    }
  },
  methods: {},
  provide() {
    return {
      count: this.count
    }
  }
}
</script>

<style lang="less">
.app {
  height: 100px;
  background-color: #f5f5f5;
}
</style>
