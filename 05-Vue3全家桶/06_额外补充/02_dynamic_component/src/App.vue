<template>
  <div class="app">
    <template v-for="(item,index) in tabs" :key="index">
      <button @click="changeTab(item)">{{ item }}</button>
    </template>
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
      tabs: ["Home", "About", "Category"],
      currentTab: 'Home'
    }
  },
  methods: {
    changeTab(item) {
      this.currentTab = item
    }
  }
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
