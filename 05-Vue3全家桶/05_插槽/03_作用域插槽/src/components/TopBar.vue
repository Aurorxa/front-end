<template>
  <div class="tab-bar">
    <template v-for="(item,index) in products" :key="index">
      <div :class="{active : currentIndex === index}" class="tab-bar-item" @click="handleClick(item,index)">
        {{ item }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ['products'],
  created() {
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  emits: ["toggle-page"],
  methods: {
    handleClick(item, index) {
      this.currentIndex = index
      this.$emit('toggle-page', item)
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
  text-align: center;

  .tab-bar-item {
    flex: 1;
    cursor: pointer;
  }
}

.active {
  color: #000;
  background-color: red;
}

</style>