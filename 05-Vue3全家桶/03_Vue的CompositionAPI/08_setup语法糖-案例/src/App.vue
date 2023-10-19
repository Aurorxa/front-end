<template>
  <div class="app">
    <!-- 区域 header   -->
    <AreaHeader
        :subTitle="areaData.subTitle"
        :title="areaData.title"/>
    <!-- 内容   -->
    <AreaList/>
  </div>
</template>

<script setup>
import areaData from '@/data'
import AreaHeader from '@/components/area/Header.vue'
import AreaList from '@/components/area/List.vue'
import {provide} from "vue";
import {AREA_DATA} from "@/utils/constant";

console.log('数据', areaData)

provide(AREA_DATA, areaData.list)

</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
  background-color: #f5f5f5;
}


</style>