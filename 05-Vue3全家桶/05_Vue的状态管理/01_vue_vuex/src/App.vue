<template>
  <div class="app">
    <h2>App 组件，当前计数为：{{ count }}</h2>
    <h2>App 组件，名字：{{ name }}</h2>
    <h2>App 组件，年龄：{{ age }}</h2>
    <Home/>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {mapState, useStore} from "vuex";
import Home from "@/components/Home.vue";

const store = useStore()

const count = computed(() => {
  return store.state.count
})

const name = computed(mapState(["name"]).name.bind({$store: store}))
const age = computed(mapState(["age"]).age.bind({$store: store}))

</script>

<style lang="less">
.app {
  background-color: pink;
}
</style>
