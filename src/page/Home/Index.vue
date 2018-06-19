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
          <YOrigin :data="organize_show" :child="crossing_box" />
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
      online_radio: {},
      // 节点数
      node_number: {},
      // 设备
      count_assets: [],
      // 组织机构
      organize_show: [],
      // 组织机构children
      crossing_box: [],
      // 视频
      play_video: {},
      // 自动修复
      fault_repair: {},
      // 中心控制数据
      control_center: [],
      // 故障原因
      current_fault: []
    };
  },
  methods: {
    loadData() {
      this.$http
        .post("Ma_zong/indexAllData", { tag: "njdh" })
        .then(res => {
          let data = res.data.data;
          if (data) {
            console.log("AllData:", data.control_center);

            // 在线率
            this.online_radio = data.online_radio;
            // 节点数
            this.node_number = data.node_number;
            // 设备
            this.count_assets = data.count_assets;
            // 组织机构
            this.organize_show = data.organize_show;
            // 第一个组织机构下的机箱数据
            this.crossing_box = data.crossing_box;
            // 视频
            this.play_video = data.play_video[0] || {};
            // 自动修复
            this.fault_repair = data.fault_repair;
            // 中心控制数据
            this.control_center = data.control_center;
            // 故障原因
            this.current_fault = data.current_fault;

            this.$store.commit("setLogin", true);
            this.$store.commit("setOriganizeShow", data.organize_show[0]);
            this.$store.commit("setCrossingBox", data.crossing_box);
          }
        })
        .catch(res => {
          this.$Notice.error({
            desc: res.response.data
          });
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
