<template>
  <ShowInfo :age="18" :height="1.88" name="许大仙"/>
  <hr>
  <ShowInfo :age="3" :height="1.68" name="张三"/>
  <hr>
  <ShowInfo :height="1.68" name="李四"/>
</template>

<script>

import ShowInfo from "@/components/ShowInfo.vue";

export default {
  name: 'App',
  components: {
    ShowInfo
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
