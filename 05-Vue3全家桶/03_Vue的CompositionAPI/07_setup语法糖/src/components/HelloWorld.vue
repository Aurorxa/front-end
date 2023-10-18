<template>
  <div>
    <h2>HelloWorld 组件</h2>
    <h2>姓名是：{{ name }} ，年龄是：{{ age }}</h2>
    <button @click="showBtnClick">Show</button>
  </div>
</template>

<script setup>
// 定义 props
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})
console.log("@", props.name, props.age)

// 绑定函数，并发出自定义事件
// 声明事件
const emits = defineEmits(['showBtnClickEvent'])
const showBtnClick = () => {
  emits('showBtnClickEvent', props.name, props.age)
}

</script>

<style lang="less" scoped>

</style>