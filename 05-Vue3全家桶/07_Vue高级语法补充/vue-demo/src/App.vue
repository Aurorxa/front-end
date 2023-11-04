<template>
  <div class="app">
    <h2>我是h2元素</h2>
    <render></render>
  </div>
</template>

<script setup>
import {h} from "vue"

// 第一种写法
function render() {
  return (h('div', {class: 'bar', innerHTML: 'hello', title: '我是div元素', style: {color: 'red'}}, []))
}

// 第二种写法
// const divRender = () => (h('div', {class: 'bar', innerHTML: 'hello', title: '我是div元素', style: {color: 'red'}}, []))
</script>


<style scoped>

</style>
