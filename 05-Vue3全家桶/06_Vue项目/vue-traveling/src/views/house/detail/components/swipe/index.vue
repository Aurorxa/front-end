<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img
              :alt="item.url"
              :src="item.url"
              class="pic"
          />
        </van-swipe-item>
      </template>
      <!-- 自定义指示器 -->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value,key) in swipeGroup" :key="key">
            <span :class="{active: isActive(value,active)}" class="item">
              {{ computedCurrentItemTitle(value, active) }}
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import underscore from 'underscore'

const props = defineProps({
  swipeData: {
    type: Array,
    default: []
  }
})

const swipeGroup = underscore.groupBy(props.swipeData, ({enumPictureCategory}) => {
  switch (enumPictureCategory) {
    case 2 :
      return 'bedchamber'
    case 4 :
      return 'toilet'
    default:
      return 'other'
  }
})

const isActive = (value, active) => {
  return value.some(({orderIndex}) => orderIndex === active)
}

const computedCurrentItem = (value, active) => {
  let currentIndex = value.findIndex(({orderIndex}) => orderIndex === active)

  return {
    title: value.at(currentIndex).title,
    currentIndex: currentIndex < 0 ? 1 : currentIndex + 1,
    total: value.length,
  }
}

const computedCurrentItemTitle = (value, active) => {
  const {title, currentIndex, total} = computedCurrentItem(value, active)
  return `${title} ${currentIndex} / ${total}`
}
</script>

<style lang="less" scoped>
.swipe {

  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 200px;
    text-align: center;

    .pic {
      width: 100%;
      height: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);

    .item {
      margin: 0 2px;
    }

    .active {
      background-color: #fff;
      color: #333;
      border-radius: 5px;
      padding: 0 1px;
    }
  }
}
</style>