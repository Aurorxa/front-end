<template>
  <div class="app">
    <h2>当前计数为：{{ count }}</h2>
    <button @click="handleClick">点我+1</button>
  </div>
</template>

<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const count = computed(() => {
  return store.state.count
})

const handleClick = () => {
  store.commit("increment")
}

</script>

<style lang="less">
.app {
  background-color: pink;
}
</style>
