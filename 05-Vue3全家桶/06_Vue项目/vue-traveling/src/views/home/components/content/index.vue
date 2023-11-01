<template>
  <div class="content">
    <SearchBar></SearchBar>
    <h2 class="title">热门精选</h2>
    <div class="list">
      <van-grid :border="false" :column-num="2" :gutter="5">
        <template v-for="(item,index) in houseList" :key="index">
          <van-grid-item v-if="item.discoveryContentType === 9">
            <HouseItemV9 :item-data="item.data" @click="handleHouseItemClick(item.data)"></HouseItemV9>
          </van-grid-item>
          <van-grid-item v-if="item.discoveryContentType === 3">
            <HouseItemV3 :item-data="item.data" @click="handleHouseItemClick(item.data)"></HouseItemV3>
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
import SearchBar from "@/components/search-bar/index.vue"
import {useRouter} from "vue-router";

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
const router = useRouter()

const handleHouseItemClick = ({houseId}) => {
  // 跳转到 detail 页面
  router.push({
    name: 'HouseDetail',
    params: {
      id: houseId
    }
  })
}

</script>

<style lang="less" scoped>
.content {
  padding: 0 20px;
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

  :deep(.van-grid-item__content--center) {
    justify-content: space-between;
  }
}
</style>