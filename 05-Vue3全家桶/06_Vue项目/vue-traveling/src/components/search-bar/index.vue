<template>
  <div class="search-bar">
    <van-row v-if="showSearchBar" justify="space-between">
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
</template>

<script setup>
// 显示搜索栏
import {useScroll} from "@/hooks/useScroll.js"
import {computed, ref} from "vue"
import {storeToRefs} from "pinia"
import {formatMonthDaySimple} from "@/utils/formatDate.js"
import {useMainStore} from "@/stores/index.js"

const props = defineProps({
  hideSearchBar: {
    type: Boolean,
    default: false
  }
})

const {scrollTop} = useScroll()
const showSearchBar = computed(() => {
  return props.hideSearchBar || scrollTop.value > 440
})
const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDaySimple(startDate.value))
const endDateStr = computed(() => formatMonthDaySimple(endDate.value))

const searchValue = ref('')

const onClickButton = () => {

}

const onSearch = (value) => {
  console.log('@@@ ->', value)
}
</script>

<style lang="less" scoped>
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
</style>