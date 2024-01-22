<template>
  <div class="title">我是大标题</div>
  <div class="subtitle">我是小标题</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 14px;
  color: #999;
}
</style>
