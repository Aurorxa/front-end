<template>
  <div class="category">
    <van-swipe :autoplay="3000" class="swipe" indicator-color="#ff9854">
      <template v-for="(category,index) in categories" :key="index">
        <van-swipe-item>
          <img :src="category.pictureUrl" alt="" class="pic">
          <span class="title">{{ category.title }}</span>
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import {useHomeStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"

const homeStore = useHomeStore()

const {categories} = storeToRefs(homeStore)

console.log('@@@', categories)
</script>

<style lang="less" scoped>
.category {
  margin-top: 10px;
  padding: 0 40px;

  .swipe {

    :deep(.van-swipe-item) {
      background-color: #f5f5f5;
      height: 70px;
      display: flex;
      width: 70px;
      flex-shrink: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .pic {
        width: 32px;
        height: 32px;
      }

      .title {
        font-size: 13px;
      }
    }
  }
}
</style>