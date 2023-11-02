<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img
              :alt="item.url"
              :src="item.url"
              class="pic"
          />
        </van-swipe-item>
      </template>
      <!-- 自定义指示器 -->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
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

  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 200px;
    text-align: center;

    .pic {
      width: 100%;
      height: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>