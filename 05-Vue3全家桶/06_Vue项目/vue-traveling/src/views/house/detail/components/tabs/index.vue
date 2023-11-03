<template>
  <div v-if="showTabs" class="house-tabs">
    <van-tabs v-model:active="active" @click-tab="handleClickTab">
      <van-tab name="info" title="描述"></van-tab>
      <van-tab name="facility" title="设施"></van-tab>
      <van-tab name="landlord" title="房东"></van-tab>
      <van-tab name="comment" title="评论"></van-tab>
      <van-tab name="notice" title="须知"></van-tab>
      <van-tab name="map" title="周边"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {computed, ref} from "vue"
import {useScroll} from "@/hooks/useScroll.js"

const active = ref('info')

const {scrollTop} = useScroll()
const showTabs = computed(() => {
  return scrollTop.value >= 200
})

const handleClickTab = ({name}) => {
  let top = 0
  switch (name) {
    case 'info':
      top = 200
      break
    case 'facility':
      top = 440
      break
    case 'landlord':
      top = 760
      break
    case 'comment':
      top = 1050
      break
    case 'notice':
      top = 1450
      break
    case 'map':
      top = 1650
      break
  }
  document.documentElement.scrollTo({
    top,
    behavior: 'smooth'
  })
}

</script>

<style lang="less" scoped>
.house-tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>