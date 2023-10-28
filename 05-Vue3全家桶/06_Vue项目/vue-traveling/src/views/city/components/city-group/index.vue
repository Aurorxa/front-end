<template>
  <!--  城市分组    -->
  <van-index-bar :index-list="indexList" highlight-color="#ff9854">
    <template v-for="(city) in cities">
      <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
      <template v-for="item in city?.cities">
        <van-cell :title="item?.cityName"/>
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  cities: {
    type: Array,
    required: true,
    default: []
  }
})

const indexList = computed(() => {
  return props.cities.map((city) => city.group)
})

</script>

<style lang="less" scoped>

</style>