<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ShowMessage",
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

</style>