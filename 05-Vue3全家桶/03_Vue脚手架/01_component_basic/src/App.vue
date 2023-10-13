<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>当前计数：{{ count }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <hr>
  <HelloWorld/>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
