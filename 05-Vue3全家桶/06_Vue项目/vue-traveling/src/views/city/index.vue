<template>
  <div class="city">
    <!--  搜索  -->
    <van-search
        v-model="value"
        placeholder="城市/区域/位置"
        show-action
        @cancel="onCancel"
        @search="onSearch"
    />
  </div>
</template>

<script setup>
import {ref} from "vue"
import {showNotify, showToast} from "vant"
import {useRouter} from "vue-router"


const value = ref('')
const router = useRouter()
const onSearch = (val) => showToast(val)
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
.city {
  width: 100%;
  height: 100%;
}
</style>