<template>
  <div class="city">
    <!-- 头部 -->
    <div class="header">
      <!--  搜索  -->
      <van-search
          v-model="searchValue"
          placeholder="城市/区域/位置"
          shape="round"
          show-action
          @cancel="onCancel"
          @search="onSearch"
      />
      <!-- 标签页 -->
      <van-tabs
          v-model:active="activeTab"
          ellipsis
      >
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :name="key" :title="value.title"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!--  列表数据  -->
    <div class="content">
      <!--  热门数据    -->
      <template v-for="(value,key) in allCities" :key="key">
        <HotCity v-show="activeTab === key" :hotCities="value?.hotCities"></HotCity>
      </template>
      <!--  城市数据    -->
      <template v-for="(value,key) in allCities" :key="key">
        <CityGroup v-show="activeTab === key" :cities="value?.cities"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {showNotify} from "vant"
import {useRouter} from "vue-router"
import {useCityStore} from "@/stores"
import {storeToRefs} from "pinia"
import CityGroup from '@/views/city/components/city-group/index.vue'
import HotCity from '@/views/city/components/hot-city/index.vue'

const searchValue = ref('')
const activeTab = ref('')
const router = useRouter()

const onSearch = (val) => {
  showNotify(val)
}
const onCancel = () => {
  showNotify({
    type: 'success',
    message: '取消',
    onClose: () => {
      router.push("/")
    }
  })
}
// 从 store 中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCity()

const {allCities} = storeToRefs(cityStore)

console.log('@', allCities)

</script>

<style lang="less" scoped>
.city {

  .header {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>