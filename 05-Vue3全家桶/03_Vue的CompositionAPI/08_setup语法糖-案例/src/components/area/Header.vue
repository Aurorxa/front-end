<template>
  <!-- 区域 header   -->
  <div class="area-header">
    <h3 class="title">{{ areaData.title }}</h3>
    <div class="subtitle">{{ areaData.subtitle }}</div>
  </div>
</template>

<script setup>

import areaData from "@/data/index.json";
</script>

<style lang="less" scoped>
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