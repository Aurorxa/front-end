<template>
  <div class="content">
    <div v-if="showSearchBar">
      <van-row class="search-bar" justify="space-between">
        <van-col span="4">
          <div class="select-time">
            <div class="item start">
              <div class="name">住</div>
              <div class="date">{{ startDateStr }}</div>
            </div>
            <div class="item end">
              <div class="name">离</div>
              <div class="date">{{ endDateStr }}</div>
            </div>
          </div>
        </van-col>
        <van-col span="20">
          <van-search
              v-model="searchValue"
              class="van-search-content"
              placeholder="关键字/位置/民宿"
              show-action
              @search="onSearch"
          >
            <template #action>
              <div @click="onClickButton">搜索</div>
            </template>
          </van-search>
        </van-col>
      </van-row>
    </div>
    <h2 class="title">热门精选</h2>
    <div class="list">
      <van-grid :border="false" :column-num="2" :gutter="5">
        <template v-for="(item,index) in houseList" :key="index">
          <van-grid-item v-if="item.discoveryContentType === 9">
            <HouseItemV9 :item-data="item.data"></HouseItemV9>
          </van-grid-item>
          <van-grid-item v-if="item.discoveryContentType === 3">
            <HouseItemV3 :item-data="item.data"></HouseItemV3>
          </van-grid-item>
        </template>
      </van-grid>
    </div>
  </div>
</template>

<script setup>
import {useHomeStore, useMainStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"
import HouseItemV9 from '@/components/house-item-v9/index.vue'
import HouseItemV3 from '@/components/house-item-v3/index.vue'
import {computed, ref} from "vue"
import {useScroll} from "@/hooks/useScroll.js"
import {currentMonthDaySimple, nextMonthDaySimple} from "@/utils/formatDate.js"

const homeStore = useHomeStore()
const mainStore = useMainStore()
const {houseList} = storeToRefs(homeStore)

// 显示搜索栏
const {scrollTop} = useScroll()
const showSearchBar = computed(() => {
  console.log(scrollTop.value)
  return scrollTop.value > 440
})

const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => currentMonthDaySimple(startDate.value))
const endDateStr = computed(() => nextMonthDaySimple(endDate.value))

const searchValue = ref('')

const onClickButton = () => {

}

const onSearch = (value) => {
  console.log('@@@ ->', value)
}

</script>

<style lang="less" scoped>
.content {
  padding: 0 40px;
  margin-top: 10px;

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;

    .select-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 15px;
      height: 54px;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;

        .name {
          font-size: 10px;
        }

        .date {
          position: relative;
          color: #333;
          margin: 0 10px 0 3px;
          font-weight: 500;
        }
      }

      .end {
        .date::after {
          content: " ";
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-right-color: #666;
          -webkit-border-radius: 3px;
          border-radius: 3px;
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          bottom: 0;
          right: -12px;
        }
      }
    }

  }

  .title {
    padding: 0 5px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  :deep(.van-grid-item__content) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    height: 100%;
    background: var(--van-grid-item-content-background)
  }

  :deep(.van-grid-item__content--center) {
    justify-content: space-between;
  }
}
</style>