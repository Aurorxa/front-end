<template>
  <div class="app">
    <!--  内容是按钮  -->
    <ShowMessage title="哈哈哈">
      <button>我是按钮</button>
    </ShowMessage>
    <!-- 内容是超链接   -->
    <ShowMessage title="呵呵呵">
      <a href="#">百度一下，你就知道</a>
    </ShowMessage>
    <!-- 内容是图片   -->
    <ShowMessage title="嘻嘻嘻">
      <img alt="" src="@/assets/logo.png">
    </ShowMessage>
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
