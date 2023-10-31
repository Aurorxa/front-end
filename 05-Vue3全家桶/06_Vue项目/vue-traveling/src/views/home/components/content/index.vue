<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <van-grid :border="false" :column-num="2" :gutter="5">
        <template v-for="(item,index) in houseList" :key="index">
          <van-grid-item v-if="item.discoveryContentType === 9">
            <HouseItemV9 :item-data="item.data"></HouseItemV9>
          </van-grid-item>
          <van-grid-item v-if="item.discoveryContentType === 3">
            <HouseItemV3 :item-data="item.data"></HouseItemV3>
          </van-grid-item>
        </template>
      </van-grid>
    </div>
  </div>
</template>

<script setup>
import {useHomeStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import HouseItemV9 from '@/components/house-item-v9/index.vue'
import HouseItemV3 from '@/components/house-item-v3/index.vue'

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
console.log('@@@ -> home list', houseList)

</script>

<style lang="less" scoped>
.content {
  padding: 0 40px;
  margin-top: 10px;

  .title {
    padding: 0 5px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  :deep(.van-grid-item__content) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    height: 100%;
    background: var(--van-grid-item-content-background)
  }
}
</style>