<template>
  <vue-scrollbar :style="{width: '100%', height: '100%'}">
    <div class="layout">
      <div class="layout-header">
        <YHeader/>
      </div>
      <Row class="layout-content">
        <i-col span="6" class="layout-content-side">
          <YVideo/>
          <YDevs/>
          <YNodes/>
        </i-col>
        <i-col span="12" class="layout-content-body">body</i-col>
        <i-col span="6" class="layout-content-side">side</i-col>
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
export default {
  components: {
    VueScrollbar,
    YHeader,
    YVideo,
    YDevs,
    YNodes
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
      min-height: 500px;
    }
  }
}
</style>
