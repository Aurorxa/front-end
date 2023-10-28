<template>
  <div class="hot-cities">
    <van-cell :border="false" title="热门"/>
    <van-grid :border="false" :column-num="4">
      <template v-for="(item,index) in hotCities" :key="index">
        <van-grid-item>
          <van-tag color="#fff4ec" text-color="#000">{{ item.cityName }}</van-tag>
        </van-grid-item>
      </template>
    </van-grid>
  </div>
</template>

<script setup>
defineProps({
  hotCities: {
    type: Array,
    required: true,
    default: []
  }
})
</script>

<style lang="less" scoped>

</style>