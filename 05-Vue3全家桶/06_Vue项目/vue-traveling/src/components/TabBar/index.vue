<template>
  <div class="tab-bar">
    <div class="tab-bar-item" @click="$router.push('/home')">
      <img alt="首页" src="@/assets/tab-bar/tab_home.png">
      首页
    </div>
    <div class="tab-bar-item" @click="$router.push('/favor')">收藏</div>
    <div class="tab-bar-item" @click="$router.push('/order')">订单</div>
    <div class="tab-bar-item" @click="$router.push('/message')">消息</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  background-color: pink;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 22px;
    }
  }
}
</style>