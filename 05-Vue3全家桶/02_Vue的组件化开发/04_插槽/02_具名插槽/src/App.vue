<template>
  <div class="app">
    <Navbar>
      <template v-slot:left>左侧导航</template>
      <template v-slot:center>中间导航</template>
      <template v-slot:right>右侧导航</template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {}
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
