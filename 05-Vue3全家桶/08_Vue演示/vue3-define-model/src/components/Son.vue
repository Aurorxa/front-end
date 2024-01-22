<template>
  <div class="son">
    我是子组件
    <input type="text" :value="modelValue" @input="modelValue = $event.target.value">
  </div>
</template>

<script setup>
const modelValue = defineModel({
  type: String
})
</script>

<style scoped>
.son {
  border: 1px solid red;
  padding: 10px;
}
</style>