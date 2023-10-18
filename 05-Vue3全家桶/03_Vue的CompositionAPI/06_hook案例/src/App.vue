<template>
  <div class="app">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <hr>
    <button @click="currentComponent = 'Home'">切换Home组件</button>
    <button @click="currentComponent = 'About'">切换About组件</button>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from "@/components/About.vue";
import {ref} from "vue";

export default {
  components: {
    Home,
    About
  },
  setup() {

    const currentComponent = ref("Home");
    
    return {
      currentComponent
    }
  }
}
</script>

<style lang="less" scoped>

</style>