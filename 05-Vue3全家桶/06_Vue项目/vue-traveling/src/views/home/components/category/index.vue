<template>
  <div class="category">
    <template v-for="(item,index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" class="pic">
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import {useHomeStore} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()

const {categories} = storeToRefs(homeStore)

console.log('@@@', categories)
</script>

<style lang="less" scoped>
.category {
  margin-top: 20px;
  padding: 0 40px;

  display: flex;
  overflow-x: auto;

  .item {
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
</style>