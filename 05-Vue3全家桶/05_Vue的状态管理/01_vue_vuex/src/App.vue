<template>
  <div class="app">
    <h2>App 组件，当前计数为：{{ count }}</h2>
    <Home/>
  </div>
</template>

<script setup>
import {computed, isRef} from "vue";
import {useStore} from "vuex";
import Home from "@/components/Home.vue";

const store = useStore()

const count = computed(() => {
  return store.state.count
})

console.log('@', isRef(count))

</script>

<style lang="less">
.app {
  background-color: pink;
}
</style>
