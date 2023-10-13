<template>
  <div class="add">
    <button @click="add(1)">+1</button>
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
  </div>
</template>

<script>
export default {
  name: "AddCounter",
  methods: {
    add(num) {
      // 让子组件发出自定义事件
      this.$emit('addEvent', num)
    }
  },
  emits: ['addEvent']

}
</script>


<style lang="less" scoped>
.add {
  button {
    background-color: orange;
  }
}
</style>