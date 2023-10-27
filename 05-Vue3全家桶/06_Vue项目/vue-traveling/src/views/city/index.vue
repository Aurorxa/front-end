<template>
  <div class="city">
    <form action="/">
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
        <van-tab title="国内·港澳台">内容 1</van-tab>
        <van-tab title="海外">内容 2</van-tab>
      </van-tabs>
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {showNotify} from "vant"
import {useRouter} from "vue-router"


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
</script>

<style lang="less" scoped>
:root:root {
  --van-search-label-color: #ff9854;
  --van-search-left-icon-color: #ff9854;
}
</style>