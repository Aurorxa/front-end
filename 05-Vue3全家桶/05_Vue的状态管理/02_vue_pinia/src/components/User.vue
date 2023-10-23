<template>
  <div class="user">
    <div>
      <h2>姓名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <h2>身高：{{ height }}</h2>
    </div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="resetState">重置状态</button>
    <button @click="replaceState">替换状态</button>
    <div>
      <h2>111朋友的的信息：</h2>
      <div>{{ getFriendsById(111) }}</div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from '@/store/user'
import {toRefs} from "vue";

const useStore = useUserStore()

const {name, age, height, getFriendsById} = toRefs(useStore)

const changeName = () => {
  useStore.name = "李四"
}

const changeAge = () => {
  useStore.$patch((state) => {
    state.age++
  })
}

const replaceState = () => {
  useStore.$state = {
    age: 40
  }
}

console.log('@@@', useStore)

const resetState = () => {
  useStore.$reset()
}

</script>

<style lang="less" scoped>

</style>