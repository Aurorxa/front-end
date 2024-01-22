<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <h2>当前计数：{{ count }}</h2>
    <button @click="increment">点我+1</button>
    <hr>
    <HelloWorld :age="18" name="许大仙" @show-btn-click-event="showBtnClickEvent"></HelloWorld>
  </div>
</template>

<script setup>
// ① 所有编写在顶层中的代码，都会默认暴露给 template 模板
import {ref} from "vue";

// ② 导入的组件直接使用
import HelloWorld from "@/components/HelloWorld.vue";

const message = "Hello World"

const count = ref(0)
const increment = () => {
  count.value++
}

const showBtnClickEvent = (...args) => {
  console.log(args)
}
</script>

<style lang="less" scoped>

</style>