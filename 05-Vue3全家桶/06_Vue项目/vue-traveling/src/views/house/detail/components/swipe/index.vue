<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="(item,index) in swipeData" :key="index">
        <img
            :alt="item.url"
            :src="item.url"
            class="pic"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: []
  }
})
</script>

<style lang="less" scoped>
.swipe {

  :deep(.van-swipe-item) {
    color: #fff;
    font-size: 20px;
    height: 200px;
    text-align: center;

    .pic {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>