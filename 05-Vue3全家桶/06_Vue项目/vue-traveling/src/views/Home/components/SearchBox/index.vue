<template>
  <div class="search-box">
    <!-- 定位   -->
    <van-row class="location" justify="space-around">
      <van-col class="item city" span="10">江苏</van-col>
      <van-col class="item position" span="8" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon class="icon" name="location" size="18"/>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
// 获取位置、城市
const positionClick = () => {
  console.log('@@@')
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置成功", res)
  }, err => {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  })

}
</script>

<style lang="less" scoped>
.search-box {

  .location {
    .item {
      width: 74px;
      line-height: 40px;
      background-color: pink;
    }

    .position {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .text {
        font-size: 12px;
      }

      .icon {
        font-size: 12px;
        color: var(--primary-color) !important;
      }
    }
  }
}
</style>