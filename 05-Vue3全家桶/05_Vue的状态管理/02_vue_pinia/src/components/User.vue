<template>
  <div class="user">
    <div>
      <h2>姓名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <h2>身高：{{ height }}</h2>
    </div>
  </div>
</template>

<script setup>
import useUserStore from '@/store/user'
import {toRefs} from "vue";

const useStore = useUserStore()

const {name, age, height} = toRefs(useStore)
</script>

<style lang="less" scoped>

</style>