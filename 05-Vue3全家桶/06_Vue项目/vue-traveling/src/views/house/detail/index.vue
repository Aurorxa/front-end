<template>
  <div class="house-detail">
    详情页面
  </div>
</template>

<script setup>
import {useRoute} from "vue-router"

const route = useRoute()

const {id} = route.params

console.log('@@@@@@@@', id)

</script>

<style lang="less" scoped>

</style>