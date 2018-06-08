<template>
  <vue-scrollbar classes="my-scrollbar">
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="left">
          <VideoChannel/>
          <NetworkDev :data="count_assets" />
          <OperationNode :data="node_number" />
          <OnOfflineRate :data="online_radio" />
        </div>
        <div class="center">
          <HeaderMenu/>
          <YMain/>
          <Crossing :data="organize_show" />
        </div>
        <div class="right">
          <FailureCause/>
          <AutoRepair :data="fault_repair" />
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
  },
  data() {
    return {
      // 节点数
      node_number: { sum: 0, online: 0 },
      // 自动修复率
      fault_repair: { artificial: 0, auto_radio: 0, automatic: 0 },
      // 资产统计
      count_assets: [],
      // 在线率
      online_radio: { off_radio: 0, on_radio: 0 },
      // 组织机构
      organize_show: []
    };
  },
  methods: {
    loadData() {
      this.$http
        .post("Ma_zong/indexAllData")
        .then(response => {
          let data = response.data.data;
          if (!data) {
            return this.$Notice.error({
              desc: "服务器请求错误！"
            });
          }
          console.log(data);

          let {
            node_number,
            fault_repair,
            count_assets,
            online_radio,
            organize_show
          } = data;
          // 运维节点
          this.node_number.sum = ~~node_number.sum;
          this.node_number.online = ~~node_number.online;
          // 自动修复
          this.fault_repair.artificial = ~~fault_repair.artificial;
          this.fault_repair.auto_radio = ~~fault_repair.auto_radio;
          this.fault_repair.automatic = ~~fault_repair.automatic;
          // 资产统计
          this.count_assets = count_assets;
          // 在/离线率
          this.online_radio.off_radio = online_radio.off_radio;
          this.online_radio.on_radio = online_radio.on_radio;
          // 组织机构
          this.organize_show = organize_show;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.loadData();
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
  background-size: 100%;
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
