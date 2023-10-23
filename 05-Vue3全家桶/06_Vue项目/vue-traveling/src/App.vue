<template>
  <div class="app">
    <router-link to="/">Go to Home</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
.app {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
