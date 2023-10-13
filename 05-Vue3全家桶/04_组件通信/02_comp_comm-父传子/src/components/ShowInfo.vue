<template>
  <div class="infos">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>
  </div>
</template>

<script>
export default {
  name: "ShowInfo",
  // 作用：接收父组件传递过来的属性
  // 数组语法
  props: ["name", "age", "height"],
  created() {
    console.log(this.name, this.age, this.height);
  }
}
</script>


<style lang="less" scoped>

</style>