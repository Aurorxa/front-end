<template>
  <div class="house-detail">
    <!-- 导航条 -->
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="房屋详情"
        @click-left="handleClickLeft"
    />
    <div v-if="mainPart" class="main">
      <!-- 轮播图 -->
      <HouseDetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <!-- 信息 -->
      <HouseDetailTopInfo :top-info="mainPart.topModule"/>
      <!--  房屋设施 -->
      <HouseFacility :facility-info="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <!--  房东介绍 -->
      <HouseLandlord :landlord-info="mainPart.dynamicModule.landlordModule"/>
      <!--  热门评论 -->
      <HouseComment :comment-info="mainPart.dynamicModule.commentModule"/>
      <!--  预定须知 -->
      <HouseNotice :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <!--  地图 -->
      <HouseMap/>
      <!-- 价格说明 -->
      <HouseIntro :intro-data="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img alt="" src="@/assets/images/house/detail/icon_ensure.png">
      <div class="text">人在旅途, 永无止境!</div>
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
import HouseIntro from '@/views/house/detail/components/intro/index.vue'
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

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>