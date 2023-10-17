<template>
  <h2 ref="title">我是标题</h2>
  <button ref="btn">按钮</button>
  <hr>
  <button @click="getElement">获取元素</button>
</template>

<script>
import {onMounted, ref} from 'vue'

export default {
  setup() {
    const title = ref()

    const btn = ref()
    const getElement = () => {
      console.log('@', title.value.textContent)
    }

    onMounted(() => {
      console.log('@@@@', title, title.value.textContent)
      console.log('@@@@', btn, btn.value.textContent)
    })

    return {
      title,
      getElement,
      btn
    }
  }
}
</script>

<style lang="less" scoped>

</style>