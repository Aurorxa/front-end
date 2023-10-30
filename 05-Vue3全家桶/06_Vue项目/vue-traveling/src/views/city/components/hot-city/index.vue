<template>
  <div class="hot-cities">
    <van-cell :border="false" title="热门"/>
    <van-grid :border="false" :column-num="4">
      <template v-for="(item,index) in hotCities" :key="index">
        <van-grid-item>
          <van-tag color="#fff4ec" text-color="#000" @click="handleCityClick(item)">{{ item.cityName }}</van-tag>
        </van-grid-item>
      </template>
    </van-grid>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router"
import {useCityStore} from "@/stores/index.js"

const router = useRouter()
const cityStore = useCityStore()

defineProps({
  hotCities: {
    type: Array,
    required: false,
    default: []
  }
})

const handleCityClick = (city) => {
  // 将当前的城市保存到 store 中
  cityStore.currentCity = city
  // 返回上一级
  router.push("/")
}
</script>

<style lang="less" scoped>

</style>