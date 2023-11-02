<template>
  <div class="price-desc">
    <h2 class="title">{{ priceDesc.title }}</h2>
    <van-text-ellipsis
        :content="priceDesc.introduction"
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

  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
  }

}
</style>