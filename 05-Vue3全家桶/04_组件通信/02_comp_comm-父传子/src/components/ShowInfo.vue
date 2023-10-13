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
  // 弊端：无法对类型进行验证，
  // props: ["name", "age", "height"],
  // 对象语法
  props: {
    name: String,
    age: Number,
    height: Number
  },
  created() {
    console.log(this.name, this.age, this.height);
  }
}
</script>


<style lang="less" scoped>

</style>