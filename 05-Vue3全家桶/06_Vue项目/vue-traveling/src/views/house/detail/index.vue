<template>
  <div class="house-detail">
    <!-- 导航条 -->
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="房屋详情"
        @click-left="handleClickLeft"
    />
    <!-- 轮播图 -->
    <div v-if="mainPart" class="swipe">
      <HouseDetailSwipe :swipe-data="mainPart?.topModule?.housePicture?.housePics"></HouseDetailSwipe>
    </div>

  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"
import {useHouseStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import {computed} from "vue"
import HouseDetailSwipe from '@/views/house/detail/components/swipe/index.vue'

const route = useRoute()
const router = useRouter()
const houseStore = useHouseStore()

const {id} = route.params

const handleClickLeft = () => {
  router.back()
}

// 获取数据
houseStore.fetchHouseDetail(id)

const {detail} = storeToRefs(houseStore)

const mainPart = computed(() => detail.value.mainPart)
</script>

<style lang="less" scoped>
.house-detail {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>