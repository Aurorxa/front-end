<template>
  <div class="sub">
    <button @click="sub(1)">-1</button>
    <button @click="sub(5)">-5</button>
    <button @click="sub(10)">-10</button>
  </div>
</template>

<script>
export default {
  name: "SubCounter",
  methods: {
    sub(num) {
      this.$emit("sub-event", num);
    }
  },
  emits: ['sub-event']
}
</script>


<style lang="less" scoped>
.sub {
  button {
    background-color: pink;
  }
}
</style>