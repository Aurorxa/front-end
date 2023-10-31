<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      列表数据
    </div>
  </div>
</template>

<script setup>
import {useHomeStore} from "@/stores/index.js"
import {storeToRefs} from "pinia"

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
console.log('@@@ -> home list', houseList)

</script>

<style lang="less" scoped>
.content {
  padding: 0 40px;
  margin-top: 10px;

  .title {
    font-size: 22px;
  }
}
</style>