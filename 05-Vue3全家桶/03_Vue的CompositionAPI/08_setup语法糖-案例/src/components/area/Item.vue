<template>
  <div class="area-item">
    <div class="cover">
      <img :src="info.pictureUrl" alt="">
    </div>
    <div class="title">
      TODO
    </div>
    <div class="name">
      {{ info.name }}
    </div>
    <div class="price">
      {{ info.priceFormat + "/晚" }}
    </div>
    <div :style="{
      fontSize: info.bottomInfo.fontSize +'px',
      color: info.bottomInfo.contentColor
    }" class="bottom-info">
      {{ info.bottomInfo.content }}
    </div>

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
  width: calc(33.33% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  .cover {
    img {
      width: 300px;
    }
  }

  .name {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
  }
}

</style>