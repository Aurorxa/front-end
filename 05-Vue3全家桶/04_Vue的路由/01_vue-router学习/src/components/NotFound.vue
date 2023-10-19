<template>
  <h2 style="color:red">
    404，找不到回家的路

    {{ computedPath }} 不正确
  </h2>
</template>

<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const computedPath = computed(() => {
  return route.params.pathMatch
})
</script>

<style lang="less" scoped>

</style>