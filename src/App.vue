<template>
  <IndexPage/>
</template>

<script>
import IndexPage from "@/page/Index/Index";

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
</style>
