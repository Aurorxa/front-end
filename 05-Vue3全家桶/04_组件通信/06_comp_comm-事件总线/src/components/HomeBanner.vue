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
  methods: {},
  created() {
    emitter.on('INCREMENT', (e) => {
      const {count} = e
      this.count = count
    })
  },
  beforeUnmount() {
    console.log('beforeUnmount')
    emitter.off('INCREMENT')
  }
}
</script>


<style lang="less" scoped>
.home-banner {
  padding: 50px;
  background-color: pink;
}
</style>