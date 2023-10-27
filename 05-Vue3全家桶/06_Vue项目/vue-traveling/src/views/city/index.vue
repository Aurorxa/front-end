<template>
  <div class="city">
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
    <van-tabs v-model:active="activeTab" animated swipeable>
      <template v-for="(value, key) in allCities" :key="key">
        <van-tab :title="value.title">{{ value.title }}</van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {showNotify} from "vant"
import {useRouter} from "vue-router"
import {useCityStore} from "@/stores";
import {storeToRefs} from "pinia";

const searchValue = ref('')
const activeTab = ref(0);
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
</script>

<style lang="less" scoped>

</style>