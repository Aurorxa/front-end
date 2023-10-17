<template>
  <div class="app">
    <template v-for="(item,index) in tabs" :key="index">
      <button :class="{active: currentIndex === index}" @click="changeTab(item,index)">{{ item }}</button>
    </template>
    <!-- 通过 Vue 的 <component> 元素和特殊的 is attribute 实现的   -->
    <!--
      :is 的值可以是：
                ① 被注册的组件名
                ② 导入的组件对象
    -->
    <KeepAlive>
      <component :is="currentTab"></component>
    </KeepAlive>
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
      currentTab: 'Home',
      currentIndex: 0
    }
  },
  methods: {
    changeTab(item, index) {
      this.currentTab = item
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}

.active {
  background-color: red;
}
</style>
