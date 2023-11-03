<template>
  <div class="house-detail">
    <!-- tabs   -->
    <HouseTabs :sectionCacheMap="sectionCacheSortedMap" @click-tab-event="handleClickTab"></HouseTabs>
    <!-- 导航条 -->
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="房屋详情"
        @click-left="handleClickLeft"
    />
    <div v-if="mainPart" v-memo="[mainPart]" class="main">
      <!-- 轮播图 -->
      <HouseDetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <!-- 信息 -->
      <HouseDetailTopInfo :ref="getSectionRef" :top-info="mainPart.topModule" name="info"/>
      <!--  房屋设施 -->
      <HouseFacility :ref="getSectionRef" :facility-info="mainPart.dynamicModule.facilityModule.houseFacility"
                     name="facility"/>
      <!--  房东介绍 -->
      <HouseLandlord :ref="getSectionRef" :landlord-info="mainPart.dynamicModule.landlordModule" name="landlord"/>
      <!--  热门评论 -->
      <HouseComment :ref="getSectionRef" :comment-info="mainPart.dynamicModule.commentModule" name="comment"/>
      <!--  预定须知 -->
      <HouseNotice :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" name="notice"/>
      <!--  地图 -->
      <HouseMap :ref="getSectionRef" name="map"/>
      <!-- 价格说明 -->
      <HouseIntro :intro-data="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img alt="" src="@/assets/images/house/detail/icon_ensure.png">
      <div class="text">人在旅途, 永无止境!</div>
    </div>
    <div class="action-bar">
      <HouseActionBar/>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"
import {useHouseStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import {computed, nextTick, ref} from "vue"
import HouseDetailSwipe from '@/views/house/detail/components/swipe/index.vue'
import HouseDetailTopInfo from '@/views/house/detail/components/top-info/index.vue'
import HouseFacility from '@/views/house/detail/components/facility/index.vue'
import HouseLandlord from '@/views/house/detail/components/landlord/index.vue'
import HouseComment from '@/views/house/detail/components/comment/index.vue'
import HouseNotice from '@/views/house/detail/components/notice/index.vue'
import HouseIntro from '@/views/house/detail/components/intro/index.vue'
import HouseMap from '@/views/house/detail/components/map/index.vue'
import HouseTabs from '@/views/house/detail/components/tabs/index.vue'
import HouseActionBar from '@/views/house/detail/components/action-bar/index.vue'
import {useScroll} from "@/hooks/useScroll.js"

const route = useRoute()
const router = useRouter()
const houseStore = useHouseStore()

const {id} = route.params

const sectionCacheMap = ref(new Map())
const {scrollTop} = useScroll()
const handleClickTab = (name) => {
  document.documentElement.scrollTo({
    top: sectionCacheMap.value.get(name) - 44,
    behavior: 'smooth'
  })
}

const getSectionRef = (value) => {
  if (value) {
    nextTick(() => {
      sectionCacheMap.value.set(value.$el.getAttribute('name'), value.$el.offsetTop)
    })
  }
}

const sectionCacheSortedMap = computed(() => {
  return sectionCacheMap.value
})


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
  background-color: #fff;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin-bottom: 30px;

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