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
      <!--  城市分组    -->
      <van-index-bar highlight-color="#ff9854">
        <template v-for="(city) in currentActiveTab?.cities">
          <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
          <template v-for="item in city?.cities">
            <van-cell :title="item?.cityName"/>
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue"
import {showNotify} from "vant"
import {useRouter} from "vue-router"
import {useCityStore} from "@/stores";
import {storeToRefs} from "pinia";

const searchValue = ref('')
const activeTab = ref('');
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

// 获取当前选择的标签
const currentActiveTab = computed(() => allCities.value[activeTab.value])
console.log('currentActiveTab', currentActiveTab)
</script>

<style lang="less" scoped>
.city {

  .header {
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .content {
    background-color: #fff;
  }
}
</style>