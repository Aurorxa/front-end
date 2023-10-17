<template>
  <div class="home">
    Home
    <HomeBanner/>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";

export default {
  name: "Home",
  components: {
    HomeBanner
  }
}
</script>


<style lang="less" scoped>
.home {
  padding: 50px;
  background-color: skyblue;
}
</style>