<template>
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
                B
            </div>
            <div class="right">
                C
            </div>
        </div>

    </div>
</template>

<script>
import Header from "./Header";
import VideoChannel from "./VideoChannel";
import NetworkDev from "./NetworkDev";
import OperationNode from "./OperationNode";
import OnOfflineRate from "./OnOfflineRate";
export default {
  components: { Header, VideoChannel, NetworkDev, OperationNode, OnOfflineRate }
};
</script>

<style scoped lang='less'>
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
  width: 966px;
}
.right {
  display: table-cell;
  width: 479px;
}
</style>
