<template>
  <div class="area-item">
    <img :src="info.picture_url" alt="" class="cover">
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    required: true,
    default: () => ({})
  },

})
</script>

<style lang="less" scoped>
.area-item {
  .cover {
    width: 300px;
  }
}

</style>