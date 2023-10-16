<template>
  <div class="app">
    <ShowMessage content="我是内容" title="我是标题"></ShowMessage>
    <ShowMessage content="我是内容" title="我是标题"></ShowMessage>
    <ShowMessage content="我是内容" title="我是标题"></ShowMessage>
  </div>
</template>

<script>
import ShowMessage from "@/components/ShowMessage.vue";

export default {
  name: 'App',
  components: {
    ShowMessage
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
