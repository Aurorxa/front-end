<template>
  <div class="app">
    <Home></Home>
    <hr>
    <About></About>
    <hr>
    <button @click="changeTitle">修改标题</button>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from "@/components/About.vue";
import useTitle from "@/hooks/useTitle";

export default {
  components: {
    Home,
    About
  },
  setup() {
    const changeTitle = () => {
      useTitle("哈哈哈！")
    }
    return {
      changeTitle
    }
  }
}
</script>

<style lang="less" scoped>

</style>