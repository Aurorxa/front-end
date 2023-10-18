<template>
  <div class="app">
    <!-- 区域 header   -->
    <div class="area-header">
      <h3 class="title">{{ areaData.title }}</h3>
      <div class="subtitle">{{ areaData.subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
import areaData from '@/data'

console.log('数据', areaData)

</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
  background-color: #f5f5f5;
}

.area-header {
  height: 84px;

  .title {
    font-size: 22px;
  }

  .subtitle {
    margin-top: 12px;
    font-size: 16px;
  }
}
</style>