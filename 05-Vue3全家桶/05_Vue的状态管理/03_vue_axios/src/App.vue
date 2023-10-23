<template>
  <div class="app">
    <button @click="axiosRequest">Axios Request</button>
  </div>
</template>

<script setup>
import axios from "axios";

const axiosRequest = () => {
  axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res)
  });
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
