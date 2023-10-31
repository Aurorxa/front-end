<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" route @change="onChange">
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

import {ref, watch} from "vue"
import {getAssetsUrl} from "@/utils/loadAssets.js"
import {useRoute} from "vue-router"
import {showToast} from "vant"

const route = useRoute()

const active = ref(0)

watch(route, (newRoute) => {
  const index = tabBarData.findIndex(item => item.path === newRoute.path)
  if (index <= 0) {
    active.value = 0
  }
  active.value = index
})

const onChange = (index) => {
  showToast(`标签 ${index}`)
}

</script>

<style lang="less" scoped>

</style>