<template>
  <div class="tab-bar">
    <template v-for="item in tabBarData" :key="item.path">
      <div class="tab-bar-item" @click="$router.push(item.path)">
        <img :alt="item.text" :src="getAssetsUrl(item.image)" class="pic">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>

import tabBarData from '@/assets/data/tabBar'
import {getAssetsUrl} from "@/utils/loadAssets.js";
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pic {
      width: 22px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>