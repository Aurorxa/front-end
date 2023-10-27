<template>
  <div class="app">
    <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <TabBar v-if="!hideTabBarRef"></TabBar>
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute()

const hideTabBarRef = ref(false)

watch(() => route.meta, (meta) => {
  const {hideTabBar} = meta
  if (hideTabBar) {
    hideTabBarRef.value = hideTabBar
  }
}, {
  immediate: true
})

</script>

<style scoped>

</style>
