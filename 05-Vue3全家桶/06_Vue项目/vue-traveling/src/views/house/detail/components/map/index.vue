<template>
  <div class="house-map">
    <DetailSection more-text="查看更多周边信息" title="位置周边">
      <baidu-map :center="center"
                 :scroll-wheel-zoom="true"
                 :zoom="zoom"
                 class="bm-view"
                 @ready="handler"
      >
      </baidu-map>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/index.vue"
import {ref} from "vue"

const center = ref({lng: 0, lat: 0})
const zoom = ref(15)

const handler = ({BMap, map}) => {
  console.log('地图', BMap, map);
  center.value.lng = 116.404
  center.value.lat = 39.915
  zoom.value = 15
}
</script>

<style lang="less" scoped>
.house-map {
  height: 250px;

  .bm-view {
    height: 250px;
  }

}
</style>