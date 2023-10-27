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
      <van-tabs v-model:active="activeTab" ellipsis rendered="renderedTab" @change="changeTab"
                @click-tab="clickTab">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :name="key" :title="value.title">{{ value.title }}</van-tab>
        </template>
      </van-tabs>
    </div>
    <!--  列表数据  -->
    <div class="content">
      <template v-for="item in 1000">
        <div> {{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {ref, watchEffect} from "vue"
import {showNotify, showToast} from "vant"
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

watchEffect(() => {
  activeTab.value = Object.keys(allCities.value).shift()
})

const changeTab = ({title, name}) => {
  console.log('@@@@', 'changeTab')
  showToast('@@@  changeTab' + title + name)
}
const clickTab = ({title, name}) => {
  console.log('@@@@', 'clickTab')
  showToast('@@@  clickTab' + title + name)
}

</script>

<style lang="less" scoped>
.city {
  .header {
    position: sticky;
    top: 0;
  }

}
</style>