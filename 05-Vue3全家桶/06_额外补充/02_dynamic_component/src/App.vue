<template>
  <div class="app">
    <button @click="currentTab = 'Home'">Home</button>
    <button @click="currentTab = 'About'">About</button>
    <button @click="currentTab = 'Category'">Category</button>
    <!-- 通过 Vue 的 <component> 元素和特殊的 is attribute 实现的   -->
    <!--
      :is 的值可以是：
                ① 被注册的组件名
                ② 导入的组件对象
    -->
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Category from "@/components/Category.vue";
import About from "@/components/About.vue";

export default {
  name: 'App',
  components: {
    Home,
    Category,
    About
  },
  data() {
    return {
      currentTab: 'Home'
    }
  },
  methods: {}
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
