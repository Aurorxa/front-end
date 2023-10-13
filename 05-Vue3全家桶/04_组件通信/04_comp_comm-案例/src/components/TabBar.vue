<template>
  <div class="tab-bar">
    <ul>
      <li v-for="(item,index) in products" :key="index">
        <a href="#" @click="handleClick(item)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: ['products'],
  created() {
  },
  emits: ["togglePage"],
  methods: {
    handleClick(item) {
      this.$emit('togglePage', item)
    }
  }
}
</script>


<style lang="less" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  background-color: #f5f5f5;

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: red;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>