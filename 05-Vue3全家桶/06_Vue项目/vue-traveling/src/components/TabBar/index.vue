<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ee0a24" route>
      <template v-for="(item,index) in tabBarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :alt="item.text" :src="props.active ? getAssetsUrl(item.activeImage) : getAssetsUrl(item.image)"/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>

import tabBarData from '@/assets/data/tabBar'

import {ref} from "vue"
import {getAssetsUrl} from "@/utils/loadAssets.js";

const currentIndex = ref(0)

</script>

<style lang="less" scoped>

</style>