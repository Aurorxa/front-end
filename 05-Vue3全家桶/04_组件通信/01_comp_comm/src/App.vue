<template>
  <div class="app">
    <!--  header  -->
    <Header/>
    <!--  content  -->
    <Content/>
    <!-- footer   -->
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {}
}
</script>

<style lang="less">
.app {
  background-color: #f5f5f5;
}
</style>
