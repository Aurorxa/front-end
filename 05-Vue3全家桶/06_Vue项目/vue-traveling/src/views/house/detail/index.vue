<template>
  <div class="house-detail">
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="房屋详情"
        @click-left="handleClickLeft"
    />
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const {id} = route.params

const handleClickLeft = () => {
  router.back()
}

</script>

<style lang="less" scoped>

</style>