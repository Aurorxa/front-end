<template>
  <div class="house-facility">
    <DetailSection more-text="查看全部设施" title="房屋设施">
      xxx
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/index.vue";

defineProps({
  facilityInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>

</style>