<template>
  <h2>当前计数为：{{ modelValue }}</h2>
  <button @click="increment">点我+1</button>
</template>

<script>
export default {
  name: "Counter",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    increment() {
      this.$emit("update:modelValue", this.modelValue + 1);
    }
  }
}
</script>


<style lang="less" scoped>

</style>