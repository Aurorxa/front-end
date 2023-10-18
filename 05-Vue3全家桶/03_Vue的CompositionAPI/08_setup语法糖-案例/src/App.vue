<template>
  <div class="app">
    <!-- 区域 header   -->
    <div class="area-header">
      <div class="title">{{ areaData.title }}</div>
      <div class="subtitle">{{ areaData.subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
import areaData from '@/data'

console.log('数据', areaData)

</script>

<style lang="less" scoped>

</style>