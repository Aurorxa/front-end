<template>
  <div class="app">
    <h2>我是h2元素</h2>
    <render></render>
    <divRender></divRender>
    <jsxRender></jsxRender>
    <counter></counter>
  </div>
</template>

<script lang="jsx" setup>
import {h, ref} from "vue"

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

const count = ref(0)

const add = () => {
  count.value++
}

function counter() {
  return (
      <div className="counter">
        <div>当前计数为：{count.value}</div>
        <button onClick={add}>点我+1</button>
      </div>
  )
}

</script>


<style scoped>
.abc {
  background-color: pink;
}

.counter {
  background-color: skyblue;
}
</style>
