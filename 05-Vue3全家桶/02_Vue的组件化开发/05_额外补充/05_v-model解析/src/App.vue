<template>
  <div class="app">
    <!-- input 的 v-model   -->
    <div>
      <input v-model="message" type="text">
    </div>
    <div>
      <input type="text" v-bind:value="message2" @input="message2 = $event.target.value">
    </div>
    <!-- 组件的 v-model   -->
    <div>
      <Counter v-model="appCounter"></Counter>
    </div>
    <div>
      <Counter v-bind:model-value="appCounter2" @update:model-value="appCounter2 = $event"></Counter>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: 'App',
  components: {
    Counter
  },
  data() {
    return {
      message: 'Hello World!',
      message2: 'Hello World!',
      appCounter: 100,
      appCounter2: 100,
    }
  },
  methods: {}
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}

.active {
  background-color: red;
}
</style>
