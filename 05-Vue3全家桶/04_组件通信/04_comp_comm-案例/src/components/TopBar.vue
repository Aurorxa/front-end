<template>
  <div class="tab-bar">
    <div v-for="(item,index) in products" :key="index" class="tab-bar-item">
      <a class="item" href="#" @click="handleClick(item)">{{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
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
.tab-bar {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  background-color: skyblue;
  text-align: center;

  .tab-bar-item {
    flex: 1;
  }

  a {
    text-decoration: none;
    display: block;
    color: red;

    &:hover {
      border-bottom: 2px solid red;
    }
  }
}


</style>