<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "@/page/Home/Index";

export default {
  name: "App",
  components: {
    HomePage
  },
  beforeCreate() {
    this.$Loading.start();
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>

<style>
</style>
