<template>
  <!-- 区域 header   -->
  <div class="area-header">
    <h3 class="title">{{ title }}</h3>
    <div class="subTitle">{{ subTitle }}</div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
    default: ""
  },
  subTitle: {
    type: String,
    required: true,
    default: ""
  }
})

</script>

<style lang="less" scoped>
.area-header {

  height: 84px;

  .title {
    font-size: 22px;
  }

  .subTitle {
    margin-top: 12px;
    font-size: 16px;
  }
}
</style>