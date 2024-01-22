<template>
  <h2>Home组件</h2>
  <h2>当前计数：{{ count }}</h2>
  <button @click="increment">点我+1</button>
  <button @click="decrement">点我-1</button>
  <hr>
  <button @click="popular">首页-流行</button>
  <button @click="hot">首页-热门</button>
</template>

<script>
import useCount from '@/hooks/useCount'
import useTitle from "@/hooks/useTitle";
import {onActivated} from "vue";

export default {
  setup() {
    let titleRef;
    onActivated(() => {
      titleRef = useTitle("首页")
    })

    const popular = () => {
      titleRef.value = "首页-流行"
    }

    const hot = () => {
      titleRef.value = "首页-热门"
    }

    return {
      ...useCount(),
      popular,
      hot
    }
  }
}
</script>

<style lang="less" scoped>

</style>