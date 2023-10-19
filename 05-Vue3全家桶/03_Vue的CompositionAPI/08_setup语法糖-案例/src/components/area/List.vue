<template>
  <div class="area-list">
    <template v-for="(item) in areaDataList" :key="item.id">
      <AreaItem :info="item"></AreaItem>
    </template>
  </div>
</template>

<script setup>
import {inject} from "vue";
import AreaItem from "@/components/area/Item.vue";
import {AREA_DATA} from "@/utils/constant";

const areaDataList = inject(AREA_DATA, "[]")
</script>

<style lang="less" scoped>
.area-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>