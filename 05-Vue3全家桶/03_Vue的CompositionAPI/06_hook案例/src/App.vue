<template>
  <div class="app">
    <Home></Home>
    <hr>
    <About></About>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from "@/components/About.vue";

export default {
  components: {
    Home,
    About
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>