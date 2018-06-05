<template>
  <div id="app">
    <IndexPage/>
  </div>
</template>

<script>
import IndexPage from "./components/IndexPage";

export default {
  name: "App",
  components: {
    IndexPage
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
}
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
