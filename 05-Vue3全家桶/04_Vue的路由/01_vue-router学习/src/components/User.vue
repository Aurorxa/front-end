<template>
  <div class="user">
    <!-- 在模板中获取 id   -->
    <h2>我是{{ $route.params.id }}用户</h2>
  </div>
</template>

<script setup>
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {watch, watchEffect} from "vue";

const route = useRoute()

watch(() => route.params, (params) => {
  console.log('watch @', params)
}, {
  immediate: true
})

watchEffect(() => {
  console.log('watchEffect #', route.params)
})

onBeforeRouteUpdate((to, from) => {
  console.log('onBeforeRouteUpdate #', to, from)
})

</script>

<style lang="less" scoped>

</style>