<template>
  <div class='app'>
    <Son v-model='count'></Son>
    {{count}}
  </div>
</template>
<script setup>
import Son from './components/Son.vue'
import { ref } from 'vue'
const count = ref(123456)
</script>
<style scoped>

</style>
