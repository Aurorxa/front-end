<template>
  <div class="app">
    <button @click="change">切换</button>
    <Transition>
      <HelloWorld v-if="isShow"/>
    </Transition>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue"
import {ref} from "vue"

const isShow = ref(false)

const change = () => {
  isShow.value = !isShow.value
}
</script>


<style scoped>
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: scale(1);
}

.v-enter-active, .v-leave-active {
  transition: all 2s ease;
}
</style>
