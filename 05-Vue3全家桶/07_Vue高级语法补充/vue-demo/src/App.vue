<template>
  <div class="app">
    <h2>我是h2元素</h2>
    <render></render>
    <divRender></divRender>
    <jsxRender></jsxRender>
  </div>
</template>

<script lang="jsx" setup>
import {h} from "vue"

// 第一种写法
function render() {
  return (h('div', {class: 'bar', innerHTML: 'hello', title: '我是div元素', style: {color: 'red'}}, []))
}

// 第二种写法
const divRender = () => (h('div', {class: 'bar', innerHTML: 'hello', title: '我是div元素', style: {color: 'red'}}, []))

function jsxRender() {
  return (
      <div style={{color: 'red'}} className="abc">我是div元素</div>
  )
}
</script>


<style scoped>
.abc {
  background-color: pink;
}
</style>
