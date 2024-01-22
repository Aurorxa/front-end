<template>
  <div class="home">
    Counter
    <HomeBanner/>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";

export default {
  name: "Counter",
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