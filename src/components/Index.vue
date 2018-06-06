<template>
  <vue-scrollbar classes="my-scrollbar">
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="left">
          <VideoChannel/>
          <NetworkDev/>
          <OperationNode/>
          <OnOfflineRate/>
        </div>
        <div class="center">
          <HeaderMenu/>
          <YMain/>
          <Crossing/>
        </div>
        <div class="right">
          <FailureCause/>
          <AutoRepair/>
        </div>
      </div>
    </div>
  </vue-scrollbar>
</template>

<script>
import VueScrollbar from "vue2-scrollbar";
import Header from "./Header";
import VideoChannel from "./VideoChannel";
import NetworkDev from "./NetworkDev";
import OperationNode from "./OperationNode";
import OnOfflineRate from "./OnOfflineRate";
import HeaderMenu from "./Menu";
import YMain from "./Main";
import Crossing from "./Crossing";
import FailureCause from "./FailureCause";
import AutoRepair from "./AutoRepair";
export default {
  components: {
    VueScrollbar,
    Header,
    VideoChannel,
    NetworkDev,
    OperationNode,
    OnOfflineRate,
    HeaderMenu,
    YMain,
    Crossing,
    FailureCause,
    AutoRepair
  }
};
</script>

<style scoped lang='less'>
.my-scrollbar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.wrapper {
  width: 1920px;
  height: 1080px;
  position: relative;
  background: url("~@/assets/backdrop.png") no-repeat;
  overflow: hidden;
}
.content {
  display: table;
  height: 1002px;
}
.left {
  display: table-cell;
  width: 470px;
  height: 100%;
  background: url("~@/assets/footerline.png") no-repeat;
  background-position: 0 100%;
}
.center {
  display: table-cell;
  width: 1000px;
  vertical-align: top;
  padding-top: 24px;
}
.right {
  display: table-cell;
  width: 480px;
  height: 100%;
  background: url("~@/assets/footerline2.png") no-repeat;
  background-position: 0 100%;
  vertical-align: top;
}
</style>
