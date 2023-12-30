<template>
  <div class="app">
    <h2>App 组件，当前计数为：{{ count }}</h2>
    <h2>App 组件，名字：{{ name }}</h2>
    <h2>App 组件，年龄：{{ age }}</h2>
    <Counter/>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import Counter from "@/components/Counter.vue";
import useState from "@/hooks/useState";

const store = useStore()

const count = computed(() => {
  return store.state.home.count
})

const {name, age} = useState('home', ["name", "age"]);
</script>

<style lang="less">
.app {
  background-color: pink;
}
</style>
