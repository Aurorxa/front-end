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
    <!-- 定位  -->
    <van-row class="location" justify="space-around">
      <van-col class="item city" span="10">广州</van-col>
      <van-col class="item position" span="8">
        <span class="text">我的位置</span>
        <van-icon class="icon" name="location" size="18"/>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>

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

  .location {
    .item {
      width: 74px;
      line-height: 30px;
      background-color: pink;
    }

    .position {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .icon {
        color: var(--primary-color) !important;
      }
    }
  }
}
</style>