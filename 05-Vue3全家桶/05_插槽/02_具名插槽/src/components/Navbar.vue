<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  }
}
</script>


<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  .left {
    width: 80px;
    background-color: skyblue;
  }

  .center {
    flex: 1;
    background-color: pink;
  }

  .right {
    width: 80px;
    background-color: #1c7430;
  }
}
</style>