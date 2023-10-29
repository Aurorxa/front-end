<template>
  <div class="search-box">
    <!-- 定位 -->
    <van-row class="location" justify="space-around">
      <van-col class="item city" span="10" @click="chooseCityClick">{{ currentCityName }}</van-col>
      <van-col class="item position" span="8" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon class="icon" name="location" size="18"/>
      </van-col>
    </van-row>
    <!-- 日期范围 -->
    <van-row class="date-range" justify="space-around">
      <van-col class="item start" span="5">
        <span class="tip">入住</span>
        <span class="date">8月25日</span>
      </van-col>
      <van-col class="item stay" span="5">
        <span>共一晚</span>
      </van-col>
      <van-col class="item end" span="5">
        <span class="tip">离店</span>
        <span class="date">8月26日</span>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
import {ref, watch} from "vue"
import {showNotify} from "vant"

import {useRouter} from "vue-router"

import {useCityStore} from "@/stores/index.js"
import {storeToRefs} from "pinia";

const cityStore = useCityStore()

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
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, error => {
        reject(error);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    })
  }

  try {
    const location = await getLocation()
    const {coords: {latitude, longitude}} = location
    const fetchResult = await fetch(`https://api.oioweb.cn/api/ip/geocoder?lng=${longitude}&lat=${latitude}`)
    const {code, result: {address_component: {province, city}}} = await fetchResult.json()
    if (code === 200) {
      showNotify(
          {
            type: 'primary', message: `${province} ${city}`
          });
      currentCity.value = `${province} ${city}`
    }
  } catch (e) {
    showNotify(
        {
          type: 'danger', message: `获取位置失败`
        });
    console.error("获取位置失败", e)
  }

}


</script>

<style lang="less" scoped>
.search-box {

  .location {

    .item {
      line-height: 40px;
    }

    .position {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

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
}
</style>