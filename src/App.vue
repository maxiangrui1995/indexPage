<template>
  <div id="app" class="app">
    <IndexPage/>
  </div>
</template>

<script>
import IndexPage from "@/page/IndexPage";

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
    console.log(
      "%c 友情提示：系统ie10+,分辨率1920*1080即可享受最佳体验,建议全屏。",
      "font-size:1.68em; color:#019bf0;"
    );
  }
};
</script>

<style>
body {
  font-size: 14px;
}
.app {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
</style>
