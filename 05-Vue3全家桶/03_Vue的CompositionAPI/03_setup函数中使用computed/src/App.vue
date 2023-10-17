<template>
  <div class="app">
    <h2>全名：{{ firstName }} {{ lastName }}</h2>
    <h2>全名：{{ fullName }}</h2>
    <h2>全名：{{ fullName2 }}</h2>
  </div>
</template>

<script>

import {computed, reactive, toRefs} from "vue";

export default {
  setup() {
    const names = reactive({
      firstName: '张',
      lastName: '三'
    })

    const fullName = computed(() => names.firstName + names.lastName)

    const fullName2 = computed({
      set: (val) => {
        names.firstName = val.split(' ')[0]
        names.lastName = val.split(' ')[1]
      },
      get: () => {
        return names.firstName + names.lastName
      }
    })

    return {
      ...toRefs(names),
      fullName,
      fullName2
    }
  }
}
</script>

<style lang="less" scoped>

</style>