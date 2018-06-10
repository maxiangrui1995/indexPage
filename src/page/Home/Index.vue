<template>
  <!-- <vue-scrollbar classes="my-scrollbar"> -->
  <div class="container">
    <YHeader/>
    <div class="container-content">
      <div class="sider">
        <YVideoChannel/>
        <YDevs/>
        <YNodes :data="node_number" />
        <YOnOffLine :data="online_radio" />
      </div>
      <div class="content">
        <YMenus/>
        <YCentralNews/>
        <YOrigin/>
      </div>
      <div class="sider">asd</div>
    </div>
  </div>
  <!-- </vue-scrollbar> -->
</template>

<script>
// import VueScrollbar from "vue2-scrollbar";
import YHeader from "./components/Header";
import YVideoChannel from "./components/VideoChannel";
import YDevs from "./components/Devs";
import YNodes from "./components/Nodes";
import YOnOffLine from "./components/OnOffLine";
import YMenus from "./components/Menus";
import YCentralNews from "./components/CentralNews";
import YOrigin from "./components/Origin";
export default {
  name: "home",
  components: {
    // VueScrollbar,
    YHeader,
    YVideoChannel,
    YDevs,
    YNodes,
    YOnOffLine,
    YMenus,
    YCentralNews,
    YOrigin
  },
  data() {
    return {
      // 在线率
      online_radio: { off_radio: 0, on_radio: 0 },
      // 节点数
      node_number: { sum: 0, online: 0 }
    };
  },
  methods: {
    loadData() {
      this.$http.post("Ma_zong/indexAllData").then(res => {
        let data = res.data.data;
        // 在线率
        this.online_radio.off_radio = 80;
        this.online_radio.on_radio = 33;
        // 节点数
        this.node_number.sum = 80;
        this.node_number.online = 33;
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
  min-width: 1800px;
  min-height: 900px;
  position: relative;
  background: url("~@/assets/backdrop.png") top center no-repeat;
  &-content {
    display: table;
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
}
</style>
