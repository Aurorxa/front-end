<template>
  <div class="tab-bar">
    <div class="tab-bar-item" @click="$router.push('/home')">
      <img alt="首页" class="pic" src="@/assets/images/tab-bar/tab_home.png">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item" @click="$router.push('/favor')">
      <img alt="首页" class="pic" src="@/assets/images/tab-bar/tab_favor.png">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item" @click="$router.push('/order')">
      <img alt="首页" class="pic" src="@/assets/images/tab-bar/tab_order.png">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item" @click="$router.push('/message')">
      <img alt="首页" class="pic" src="@/assets/images/tab-bar/tab_message.png">
      <span class="text">消息</span>
    </div>
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
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pic {
      width: 22px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>