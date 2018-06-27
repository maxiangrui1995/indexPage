<template>
  <vue-scrollbar :style="{width: '100%', height: '100%'}">
    <div class="layout">
      <div class="layout-header">
        <YHeader/>
      </div>
      <Row class="layout-content">
        <i-col span="6" class="layout-content-side layout-content-side-left">
          <YVideo/>
          <YDevs/>
          <YNodes/>
          <YLine/>
        </i-col>
        <i-col span="12" class="layout-content-body">body</i-col>
        <i-col span="6" class="layout-content-side layout-content-side-right">side</i-col>
      </Row>
    </div>
  </vue-scrollbar>
</template>

<script>
import VueScrollbar from "vue2-scrollbar";
import YHeader from "./Index/Header";
import YVideo from "./Index/Video";
import YDevs from "./Index/Devs";
import YNodes from "./Index/Nodes";
import YLine from "./Index/OnOffLine";
export default {
  components: {
    VueScrollbar,
    YHeader,
    YVideo,
    YDevs,
    YNodes,
    YLine
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.layout {
  width: 1920px;
  height: 1080px;
  background: url("~@/assets/background.png") top center;
  &-content {
    &-side,
    &-body {
      height: 1002px;
      position: relative;
    }
    &-side-left:after {
      display: block;
      content: "";
      width: 765px;
      height: 101px;
      background: url("~@/assets/footerline.png");
      z-index: 0;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &-side-right:after {
      display: block;
      content: "";
      width: 503px;
      height: 101px;
      background: url("~@/assets/footerline2.png");
      z-index: 0;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
