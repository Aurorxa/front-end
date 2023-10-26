<template>
  <div class="search-box">
    <!-- 定位   -->
    <van-row class="location" justify="space-around">
      <van-col class="item city" span="10">{{ currentCity }}</van-col>
      <van-col class="item position" span="8" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon class="icon" name="location" size="18"/>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {showNotify} from "vant";
import 'vant/es/notify/style'

const currentCity = ref('北京')
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
    console.log("获取位置失败", e)
  }

}
</script>

<style lang="less" scoped>
.search-box {

  .location {
    .item {
      width: 74px;
      line-height: 40px;
      background-color: pink;
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
}
</style>