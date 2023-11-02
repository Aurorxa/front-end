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
import {useHouseStore} from "@/stores/index.js";
import {onActivated, onMounted} from "vue";

const route = useRoute()
const router = useRouter()
const houseStore = useHouseStore()

const {id} = route.params

const handleClickLeft = () => {
  router.back()
}

onMounted(() => {
  houseStore.fetchHouseDetail(id)
})

onActivated(() => {
  houseStore.fetchHouseDetail(id)
})


</script>

<style lang="less" scoped>

</style>