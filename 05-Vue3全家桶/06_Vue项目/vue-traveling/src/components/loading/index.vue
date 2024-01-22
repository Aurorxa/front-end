<template>
  <div class="loading">
    <van-loading color="#1989fa" text-color="#fff" vertical>
      加载中...
    </van-loading>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>