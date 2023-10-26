<template>
  <div class="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">收藏</div>
    <div class="tab-bar-item">订单</div>
    <div class="tab-bar-item">消息</div>
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
  height: 50px;
  display: flex;
  background-color: pink;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>