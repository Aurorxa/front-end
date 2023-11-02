<template>
  <div class="price-desc">
    <h2 class="title">{{ priceDesc.title }}</h2>
    <van-text-ellipsis
        :content="priceDesc.introduction"
        class="content"
        collapse-text="收起"
        expand-text="展开"
        rows="3"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  priceDesc: {
    type: Object,
    default: () => ({})
  }
})

console.log('price desc', props.priceDesc)
</script>

<style lang="less" scoped>
.price-desc {
  width: 100%;
  height: 300px;
  padding: 0 15px;
  margin-top: 120px;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .content {
    padding: 0 30px 0 0;
  }

}
</style>