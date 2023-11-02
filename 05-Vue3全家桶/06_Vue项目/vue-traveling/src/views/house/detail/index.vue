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
      <HouseDetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
    <!-- 信息 -->
    <div v-if="mainPart" class="info">
      <HouseDetailTopInfo :top-info="mainPart.topModule"/>
    </div>
    <!--  房屋设施 -->
    <div v-if="mainPart" class="facility">
      <HouseFacility :facility-info="mainPart.dynamicModule.facilityModule.houseFacility"></HouseFacility>
    </div>
    <!--  房东介绍 -->
    <div v-if="mainPart" class="landlord">
      <HouseLandlord :landlord-info="mainPart.dynamicModule.landlordModule"></HouseLandlord>
    </div>
    <!--  热门评论 -->
    <div v-if="mainPart" class="comment">
      <HouseComment :comment-info="mainPart.dynamicModule.commentModule"></HouseComment>
    </div>
    <!--  预定须知 -->
    <div v-if="mainPart" class="notice">
      <HouseNotice :order-rules="mainPart.dynamicModule.rulesModule.orderRules"></HouseNotice>
    </div>
    <!--  地图 -->
    <div v-if="mainPart" class="notice">
      <HouseMap></HouseMap>
    </div>


  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"
import {useHouseStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import {computed} from "vue"
import HouseDetailSwipe from '@/views/house/detail/components/swipe/index.vue'
import HouseDetailTopInfo from '@/views/house/detail/components/top-info/index.vue'
import HouseFacility from '@/views/house/detail/components/facility/index.vue'
import HouseLandlord from '@/views/house/detail/components/landlord/index.vue'
import HouseComment from '@/views/house/detail/components/comment/index.vue'
import HouseNotice from '@/views/house/detail/components/notice/index.vue'
import HouseMap from '@/views/house/detail/components/map/index.vue'

const route = useRoute()
const router = useRouter()
const houseStore = useHouseStore()

const {id} = route.params

// 处理返回按钮
const handleClickLeft = () => {
  router.back()
}

// 获取数据
houseStore.fetchHouseDetail(id)
const {detail} = storeToRefs(houseStore)

// props 数据
const mainPart = computed(() => detail.value.mainPart)


</script>

<style lang="less" scoped>
.house-detail {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>