<template>
  <div class="home">
    <h2>Home组件</h2>
    <h2>当前 2 倍计数：{{ doubleCount }}</h2>
    <button @click="increment">点我+1</button>
    <button @click="incrementPayload(10)">点我10</button>
    <button @click="incrementPayload20">点我20</button>
    <button @click="incrementAction(5000)">点我异步增加</button>
  </div>
</template>

<script setup>

import {useStore} from "vuex";
import useGetters from "@/hooks/useGetters";
import useMutations from "@/hooks/useMutations";
import useActions from "@/hooks/useActions";

const {increment, incrementPayload} = useMutations('home', ["increment", "incrementPayload"])
const store = useStore()

const {doubleCount} = useGetters('home', ["doubleCount"])
const {incrementAction} = useActions('home', ["incrementAction"])
const incrementPayload20 = () => {
  incrementPayload(20)
}

</script>

<style lang="less" scoped>
.home {
  background-color: skyblue;
}
</style>