<template>
  <div class="search">
    <van-search
        v-model="searchValue"
        label="地址"
        placeholder="搜索天安门的景点..."
        shape="round"
        show-action
        @search="onSearch"
    >
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

const {city, startDate, endDate} = route.query

console.log('city', city)
console.log('startDate', startDate)
console.log('endDate', endDate)

const searchValue = ref('')

const onClickButton = () => {
  searchValue.value = ''
}

const onSearch = () => {
  console.log(searchValue.value)
}
</script>

<style lang="less" scoped>

</style>