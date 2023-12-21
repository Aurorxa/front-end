<template>
  <div class='not-found'>
    <van-nav-bar
      title="404"
      left-text="返回"
      left-arrow
      @click-left="handleClickLeft"
    />
    你来到了知识的荒漠~
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClickLeft = () => router.push('/')
</script>

<style scoped lang='less'>

</style>