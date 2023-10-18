<template>
  <div class="app">
    <!-- 区域 header   -->
    <div class="area-header">
      <div class="title">{{ data.title }}</div>
      <div class="subtitle">{{ data.subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
import data from '@/data'

console.log('数据', data)

</script>

<style lang="less" scoped>

</style>