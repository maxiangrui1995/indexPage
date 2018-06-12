<template>
  <vue-scrollbar classes="my-scrollbar">
    <div class="container">
      <YHeader/>
      <div class="container-content">
        <div class="sider">
          <YVideoChannel :data="play_video" />
          <YDevs :data="count_assets" />
          <YNodes :data="node_number" />
          <YOnOffLine :data="online_radio" />
        </div>
        <div class="content">
          <YMenus/>
          <YCentralNews :data="control_center" />
          <YOrigin :data="organize_show" />
        </div>
        <div class="sider">
          <YFailure :data="current_fault" />
          <YRepair :data="fault_repair" />
        </div>
      </div>
    </div>
  </vue-scrollbar>
</template>

<script>
import VueScrollbar from "vue2-scrollbar";
import YHeader from "./components/Header";
import YVideoChannel from "./components/VideoChannel";
import YDevs from "./components/Devs";
import YNodes from "./components/Nodes";
import YOnOffLine from "./components/OnOffLine";
import YMenus from "./components/Menus";
import YCentralNews from "./components/CentralNews";
import YOrigin from "./components/Origin";
import YFailure from "./components/Failure";
import YRepair from "./components/Repair";
export default {
  name: "home",
  components: {
    VueScrollbar,
    YHeader,
    YVideoChannel,
    YDevs,
    YNodes,
    YOnOffLine,
    YMenus,
    YCentralNews,
    YOrigin,
    YFailure,
    YRepair
  },
  data() {
    return {
      // 在线率
      online_radio: { off_radio: 0, on_radio: 0 },
      // 节点数
      node_number: { sum: 0, online: 0 },
      // 设备
      count_assets: [],
      // 组织机构
      organize_show: [],
      // 视频
      play_video: {},
      // 自动修复
      fault_repair: { artificial: 0, auto_radio: 0, automatic: 0 },
      // 中心控制数据
      control_center: [],
      // 故障原因
      current_fault: []
    };
  },
  methods: {
    loadData() {
      this.$http.post("Ma_zong/indexAllData").then(res => {
        let data = res.data.data;
        console.log(data);
        if (!data) {
          return this.$Notice.error({
            desc: "服务器请求错误！"
          });
        }
        // 在线率
        let online_radio = data.online_radio;
        this.online_radio.off_radio = online_radio.off_radio;
        this.online_radio.on_radio = online_radio.on_radio;
        // 节点数
        let node_number = data.node_number;
        this.node_number.sum = node_number.sum;
        this.node_number.online = node_number.online;
        // 设备
        let count_assets = data.count_assets;
        this.count_assets = count_assets;
        // 组织机构
        let organize_show = data.organize_show;
        this.organize_show = organize_show;
        // 视频
        let play_video = data.play_video[0] || {};
        this.play_video = play_video;
        // 自动修复
        let fault_repair = data.fault_repair;
        this.fault_repair.artificial = ~~fault_repair.artificial;
        this.fault_repair.auto_radio = ~~fault_repair.auto_radio;
        this.fault_repair.automatic = ~~fault_repair.automatic;
        // 中心控制数据
        let control_center = data.control_center;
        this.control_center = control_center;
        // 故障原因
        let current_fault = data.current_fault;
        this.current_fault = current_fault;
      });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="less" scoped>
.my-scrollbar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.container {
  width: 1920px;
  height: 1080px;
  position: relative;
  background: #030e2c url("~@/assets/backdrop.png");
  overflow: hidden;
  z-index: 0;
  &-content {
    width: 100%;
    display: table;
    z-index: 1;
    .sider,
    .content {
      display: table-cell;
      vertical-align: top;
    }
    .sider {
      width: 25%;
    }
    .content {
      width: 50%;
      padding-top: 24px;
    }
  }
  &:before {
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
  &:after {
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
</style>
