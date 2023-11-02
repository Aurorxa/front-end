<template>
  <div class="price-desc">
    <van-row>
      <van-col span="24">
        <h2 class="title">{{ introData.title }}</h2>
      </van-col>
      <van-col span="24">
        <van-text-ellipsis
            :content="introData.introduction"
            class="content"
            collapse-text="收起"
            expand-text="展开"
            rows="3"
        />
      </van-col>
    </van-row>

  </div>
</template>

<script setup>
const props = defineProps({
  introData: {
    type: Object,
    default: () => ({})
  }
})

console.log('price desc', props.introData)
</script>

<style lang="less" scoped>
.price-desc {
  padding: 0 15px;
  margin-top: 120px;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
  }

}
</style>