<template>
  <!--  城市分组    -->
  <van-index-bar :index-list="cities.map((city) => city.group)" highlight-color="#ff9854">
    <template v-for="(city) in cities">
      <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
      <template v-for="item in city?.cities">
        <van-cell :title="item?.cityName"/>
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
defineProps({
  cities: {
    type: Array,
    required: true,
    default: []
  }
})
</script>

<style lang="less" scoped>

</style>