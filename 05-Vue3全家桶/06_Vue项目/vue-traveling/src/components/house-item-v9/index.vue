<template>
  <div class="house-item-v9">
    <div class="cover">
      <van-image
          :src="itemData.image.url"
      />
    </div>
    <div class="infos">
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="name">{{ itemData.houseName }}</div>
      <div class="other">
        <van-rate v-model="score" :size="12" allow-half class="rate" color="#fff" readonly/>
        <div class="price">{{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, toRefs} from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const {itemData} = toRefs(props)

const score = computed(() => {
  return Number(itemData.value.commentScore)
})

const price = computed(() => {
  return `${'¥ ' + itemData.value.finalPrice}`
})


</script>

<style lang="less" scoped>
.house-item-v9 {

  .cover {
    width: 100%;
  }

  .infos {
    position: absolute;
    bottom: 0;
    color: #fff;

    .summary {
      margin-bottom: 10px;
      font-size: 12px;
    }

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 10px;
      margin-bottom: 10px;
    }

    .other {
      padding: 10px 0;

      display: flex;
      justify-content: space-around;
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>