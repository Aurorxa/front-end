<template>
  <div class="search-box">
    <!-- 定位 -->
    <van-row class="location" justify="space-between">
      <van-col class="item city" @click="chooseCityClick">{{ currentCityName }}</van-col>
      <van-col class="item position" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon class="icon" name="location" size="18"/>
      </van-col>
    </van-row>
    <!-- 日期范围 -->
    <van-row class="date-range"
             justify="space-between"
             @click="showCalendar = true"
    >
      <van-col class="item start">
        <span class="tip">入住</span>
        <span class="date">{{ startDate }}</span>
      </van-col>
      <van-col class="item stay">
        <span>共{{ stay }}晚</span>
      </van-col>
      <van-col class="item end">
        <span class="tip">离店</span>
        <span class="date">{{ endDate }}</span>
      </van-col>
    </van-row>
    <!-- 日历组件   -->
    <van-calendar v-model:show="showCalendar"
                  :show-confirm="false"
                  color="#ff9854"
                  type="range"
                  @confirm="handleConfirmCalendar"
    />
    <!-- 价格计算   -->
    <van-row class="price-counter" justify="space-between">
      <van-col class="item">
        <span class="tip">价格不限</span>
      </van-col>
      <van-col class="item">
        <span class="tip">人数不限</span>
      </van-col>
    </van-row>
    <!-- 关键字   -->
    <van-row class="keyword" justify="space-between">
      <van-col class="item">
        <span class="tip">关键字/位置/民宿名</span>
      </van-col>
    </van-row>
    <!-- 热门建议   -->
    <van-row class="hot-suggest" justify="space-evenly">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <van-tag color="#fff4ec" style="margin:5px 5px 5px 0" text-color="#000">{{ item.tagText.text }}</van-tag>
      </template>
    </van-row>
    <!-- 搜索按钮   -->
    <van-row class="search-btn">
      <van-button :to="{path: '/search'}" block color="#ff9854" round>开始搜索</van-button>
    </van-row>

  </div>
</template>

<script setup>
import {ref, watch} from "vue"

import {useRouter} from "vue-router"

import {useCityStore, useHomeStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import {currentMonthDay, formatDiffDay, formatMonthDay, nextMonthDay} from "@/utils/formatDate.js"
import {useLocation} from "@/hooks/useLocation.js";

const cityStore = useCityStore()
const homeStore = useHomeStore()

const {hotSuggests} = storeToRefs(homeStore)

const {currentCity} = storeToRefs(cityStore)

const router = useRouter()
const currentCityName = ref('北京市')


watch(() => currentCity.value, ({cityName}) => {
  if (cityName) {
    currentCityName.value = cityName
  }
}, {
  immediate: true,
  deep: true
})

// 选择城市
const chooseCityClick = () => {
  router.push('/city')
}

// 获取位置、城市
const positionClick = async () => {

  const {city} = await useLocation()

  currentCityName.value = `${city}`
}

// 时间范围
const startDate = ref(currentMonthDay())
const endDate = ref(nextMonthDay())
const stay = ref('1')

const showCalendar = ref(false)

const handleConfirmCalendar = (values) => {
  // 设置日期
  const [start, end] = values
  startDate.value = formatMonthDay(start)
  endDate.value = formatMonthDay(end)
  // 隐藏日历
  showCalendar.value = false
  // 设置对应的天数
  stay.value = formatDiffDay(start, end)
}

</script>

<style lang="less" scoped>
.search-box {
  padding: 0 40px;

  .location {

    .item {
      line-height: 40px;
    }

    .position {

      .text {
        font-size: 12px;
      }

      .icon {
        font-size: 12px;
        color: var(--primary-color) !important;
      }
    }
  }

  .date-range {

    .item {
      line-height: 20px;
      height: 40px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .tip {
        font-size: 12px;
        color: gray;
      }

      .date {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  .price-counter {

    .item {
      height: 40px;
      line-height: 40px;
      color: gray;
    }
  }

  .keyword {

    .item {
      line-height: 40px;
      height: 40px;
      color: gray;
    }
  }

  .search-btn {
    margin-top: 10px;
  }
}
</style>