<template>
  <div class="home-banner">
    HomeBanner
    {{ count }}
  </div>
</template>

<script>

import emitter from "@/utils/event-bus";

export default {
  name: "HomeBanner",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleIncrementEvent(e) {
      const {count} = e
      this.count = count
    }
  },
  created() {
    emitter.on('INCREMENT', this.handleIncrementEvent)
  },
  unmounted() {
    console.log('unmounted')
    emitter.off('INCREMENT', this.handleIncrementEvent)
  }
}
</script>


<style lang="less" scoped>
.home-banner {
  padding: 50px;
  background-color: pink;
}
</style>