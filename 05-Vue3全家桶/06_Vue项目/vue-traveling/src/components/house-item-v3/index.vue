<template>
  <div class="house-item-v3">
    <div class="cover">
      <van-image
          :src="itemData.image.url"
      />
    </div>
    <div class="infos">
      <div class="location">
        <van-icon name="location"/>
        {{ itemData.location }}
      </div>
      <div class="name">{{ itemData.houseName }}</div>
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="other">
        <div class="price">
          <div class="new-price">{{ price }}</div>
          <div class="old-price">{{ oldPrice }}</div>
        </div>
        <div class="remark">
          <van-tag color="#f3bac2" type="primary">{{ remark }}</van-tag>
        </div>
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

const price = computed(() => {
  return `${'¥ ' + itemData.value.finalPrice}`
})

const oldPrice = computed(() => {
  return `${'¥' + itemData.value.productPrice}`
})

const remark = computed(() => {
  return `${'已减' + '¥' + (itemData.value.productPrice - itemData.value.finalPrice) + '元'}`
})

</script>

<style lang="less" scoped>
.house-item-v3 {
  .infos {
    padding: 3px 0;

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 12px;
      margin-top: 3px;
    }

    .summary {
      font-size: 10px;
      margin-top: 3px;
    }

    .other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3px;

      .price {
        font-size: 14px;
        display: flex;
        height: 16px;
        line-height: 16px;

        .new-price {
          color: var(--primary-color);
        }

        .old-price {
          margin-left: 2px;
          color: gray;
          font-size: 13px;
          text-decoration: line-through;
        }
      }

      .remark {
      }
    }
  }
}
</style>