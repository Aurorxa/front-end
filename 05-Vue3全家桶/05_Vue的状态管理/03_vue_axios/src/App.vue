<template>
  <div class="app">
    <div>
      <button @click="axiosRequest">Axios Request</button>
    </div>
    <div>
      <button @click="axiosGET">Axios GET</button>
    </div>
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
    console.log('data', res.data)
  });
}

const axiosGET = () => {
  axios.get("https://jsonplaceholder.typicode.com/comments", {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      postId: 1,
    },
  }).then((res) => {
    console.log(res)
    console.log('data', res.data)
  });
}

</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
