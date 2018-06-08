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
body,
html {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
