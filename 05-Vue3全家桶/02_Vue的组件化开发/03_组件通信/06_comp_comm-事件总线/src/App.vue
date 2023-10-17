<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
    <Home v-if="isShow"/>
    <button @click="handleClick">点我+1</button>
    <button @click="handleShow">是否显示</button>
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
      count: 10,
      isShow: true
    }
  },
  methods: {
    handleClick() {
      this.count++;
      emitter.emit('INCREMENT', {count: this.count})
    },
    handleShow() {
      this.isShow = !this.isShow
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
