<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
    <Home/>
    <button @click="handleClick">点我+1</button>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import emitter from "@/utils/event-bus";

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      count: 10
    }
  },
  methods: {
    handleClick() {
      this.count++;
      emitter.emit('INCREMENT', {count: this.count})
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
