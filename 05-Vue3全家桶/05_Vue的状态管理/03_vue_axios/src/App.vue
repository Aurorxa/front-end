<template>
  <div class="app">
    <div>
      <button @click="axiosRequest">Axios Request</button>
    </div>
    <div>
      <button @click="axiosGET">Axios GET</button>
    </div>
    <div>
      <button @click="axiosPOST1">Axios POST1</button>
      <button @click="axiosPOST2">Axios POST2</button>
    </div>
    <div>
      <button @click="selfAxios">自定义 Axios</button>
      <button @click="selfAxiosGET">自定义 Axios GET</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import axiosRequest2 from '@/service'


axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.timeout = 3000
axios.defaults.headers.get['Content-Type'] = "application/json"

const axiosRequest = () => {
  axios.request({
    method: "GET",
    url: "/todos/1"
  }).then((res) => {
    console.log(res)
    console.log('data', res.data)
  });
}

const axiosGET = () => {
  axios.get("/comments", {
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

const axiosPOST1 = () => {
  axios.post("/comments", {
    body: "This is a comment",
    postId: 1,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res)
    console.log('data', res.data)
  });
}

const axiosPOST2 = () => {
  axios.post("/comments", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body: "This is a comment",
      postId: 1,
    }
  }).then((res) => {
    console.log(res)
    console.log('data', res.data)
  });
}

const selfAxios = () => {
  axiosRequest2.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  }).then((res) => {
    console.log('selfAxios', res)
  })
}

const selfAxiosGET = () => {
  axiosRequest2.get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      postId: 1,
    }
  }).then((res) => {
    console.log('selfAxiosGET', res)
  });
}

</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
