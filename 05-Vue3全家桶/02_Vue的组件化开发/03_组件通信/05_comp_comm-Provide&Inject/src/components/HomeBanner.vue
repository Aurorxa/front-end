<template>
  <div class="home-banner">
    HomeBanner
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  data() {
    return {
      appCount: this.count
    };
  },
  methods: {},
  inject: ['count']
}
</script>


<style lang="less" scoped>
.home-banner {
  padding: 50px;
  background-color: pink;
}
</style>