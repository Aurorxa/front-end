<template>
  <div class="app">
    <h2>当前计数：{{ count }}</h2>
  </div>
  <AddCounter @add-event="addCount"/>
  <SubCounter @subEvent="subCount"/>
</template>

<script>
import AddCounter from "@/components/AddCounter.vue";
import SubCounter from "@/components/SubCounter.vue";

export default {
  name: 'App',
  components: {
    AddCounter,
    SubCounter
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount(num) {
      this.count += num
    },
    subCount(num) {
      this.count -= num
    }
  },

}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
