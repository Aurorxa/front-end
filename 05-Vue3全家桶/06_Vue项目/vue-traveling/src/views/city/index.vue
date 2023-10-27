<template>
  <div class="city">
    <form action="/">
      <!--  搜索  -->
      <van-search
          v-model="searchValue"
          placeholder="城市/区域/位置"
          show-action
          @cancel="onCancel"
          @search="onSearch"
      />
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {showNotify} from "vant"
import {useRouter} from "vue-router"


const searchValue = ref('')
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
.city {
  width: 100%;
  height: 100%;
}
</style>