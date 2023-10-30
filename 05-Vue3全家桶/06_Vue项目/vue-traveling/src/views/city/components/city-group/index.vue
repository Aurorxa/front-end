<template>
  <!--  城市分组    -->
  <van-index-bar :index-list="indexList" highlight-color="#ff9854">
    <template v-for="(city) in cities">
      <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
      <template v-for="item in city?.cities">
        <van-cell :title="item?.cityName" @click="handleCityClick(item)"/>
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import {computed} from "vue"
import {useRouter} from "vue-router"
import {useCityStore} from "@/stores/index.js"

const router = useRouter()
const cityStore = useCityStore()

const props = defineProps({
  cities: {
    type: Array,
    required: false,
    default: []
  }
})

const indexList = computed(() => {
  return props.cities.map((city) => city.group)
})

const handleCityClick = (city) => {
  // 将当前的城市保存到 store 中
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>

<style lang="less" scoped>

</style>