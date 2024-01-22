<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
    <Counter/>
    <button @click="count++">点我+1</button>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import {computed} from "vue";

export default {
  name: 'App',
  components: {
    Counter
  },
  data() {
    return {
      count: 10
    }
  },
  methods: {},
  provide() {
    return {
      /* 和响应式数据配合使用 */
      count: computed(() => this.count)
    }
  }
}
</script>

<style lang="less">
.app {
  height: 100px;
  background-color: #f5f5f5;
}
</style>
