<template>
  <div class="app">
    <!-- 区域 header   -->
    <AreaHeader :subtitle="areaData.subtitle" :title="areaData.title"></AreaHeader>
  </div>
</template>

<script setup>
import areaData from '@/data'
import AreaHeader from '@/components/area/Header.vue'

console.log('数据', areaData)
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
  background-color: #f5f5f5;
}


</style>