<template>
  <div class="home">
    <!--  标题  -->
    <van-nav-bar title="人在旅途"/>
    <!--  轮播图 -->
    <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
      <van-swipe-item>
        <img alt="" class="pic" src="@/assets/images/home/banner.webp">
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 搜索 -->
    <SearchBox></SearchBox>
    <!-- 分类 -->
    <Category></Category>
    <!-- 热门精选 -->
    <Content></Content>
  </div>

</template>

<script setup>
import SearchBox from '@/views/Home/components/search-box/index.vue'
import Category from '@/views/Home/components/category/index.vue'
import {useHomeStore} from "@/stores/index.js"
import Content from "@/views/home/components/content/index.vue"
// 从 store 中获取数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
</script>

<style lang="less" scoped>
.home {

  :deep(.van-nav-bar__title) {
    color: var(--primary-color);
  }

  .swipe {

    :deep(.van-swipe-item) {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      height: 150px;
      text-align: center;
      background-color: #39a9ed;

      .pic {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

}
</style>