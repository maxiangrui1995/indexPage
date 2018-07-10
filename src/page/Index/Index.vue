<template>
  <vue-scrollbar :style="{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0'}">
    <div class="layout">
      <transition name="fadeInTop">
        <div class="layout-header" v-if="show.header">
          <div class="layout-header-logo"></div>
        </div>
      </transition>
      <div class="layout-body">
        <div class="layout-body-inner layout-body-inner-left">
          <transition name="fadeInLeft">
            <YVideoChannel v-if="show.videoChannel" />
          </transition>
          <transition name="fadeInLeft">
            <YDevs v-if="show.devs" :data="count_assets" />
          </transition>
          <transition name="fadeInLeft">
            <YNodes v-if="show.nodes" :data="node_number" />
          </transition>
          <transition name="fadeInLeft">
            <YOnOffLine v-if="show.onOffLine" :data="online_radio" />
          </transition>
        </div>
        <div class="layout-body-inner layout-body-inner-content">
          <transition name="fade">
            <YMenus v-if="show.menus" />
          </transition>
          <transition name="fade">
            <YNews v-if="show.news" :data="control_center" />
          </transition>
          <transition name="fade">
            <YOrigin v-if="show.origin" :data="organize_show" />
          </transition>
        </div>
        <div class="layout-body-inner layout-body-inner-right">
          <transition name="fadeInRight">
            <YFailure v-if="show.failure" :data="current_fault" />
          </transition>
          <transition name="fadeInRight">
            <YRepair v-if="show.repair" :data="fault_repair" />
          </transition>
        </div>
      </div>
    </div>
  </vue-scrollbar>
</template>

<script>
import VueScrollbar from "vue2-scrollbar";
import YVideoChannel from "./components/VideoChannel";
import YDevs from "./components/Devs";
import YNodes from "./components/Nodes";
import YOnOffLine from "./components/OnOffLine";
import YMenus from "./components/Menus";
import YNews from "./components/News";
import YOrigin from "./components/Origin";
import YFailure from "./components/Failure";
import YRepair from "./components/Repair";
export default {
  components: {
    VueScrollbar,
    YVideoChannel,
    YDevs,
    YNodes,
    YOnOffLine,
    YMenus,
    YNews,
    YOrigin,
    YFailure,
    YRepair
  },
  data() {
    return {
      show: {
        header: true,
        videoChannel: true,
        devs: true,
        nodes: true,
        onOffLine: true,
        menus: true,
        news: true,
        origin: true,
        failure: true,
        repair: true
      },
      // 节点数
      node_number: {},
      // 在线率
      online_radio: {},
      // 设备
      count_assets: [],
      // 中心控制数据
      control_center: [],
      // 故障原因
      current_fault: [],
      // 自动修复
      fault_repair: {},
      // 组织机构
      organize_show: []
    };
  },
  methods: {
    // 请求数据
    fetchAllData() {
      this.$http("Ma_zong/indexAllData").then(res => {
        if (!res.status) {
          return;
        }
        let data = res.data;
        // console.log(data);
        // 节点数
        this.node_number = data.node_number;
        // 在线率
        this.online_radio = data.online_radio;
        // 设备
        this.count_assets = data.count_assets;
        // 中心控制数据
        this.control_center = data.control_center;
        // 故障原因
        this.current_fault = data.current_fault;
        // 自动修复
        this.fault_repair = data.fault_repair;
        // 组织机构
        this.organize_show = data.organize_show;
      });
    },
    // 实时的单独请求 5s
    realtimeFetchData() {
      setInterval(() => {
        // 节点数
        this.$http("Ma_zong/nodeNumber").then(res => {
          if (res.status) {
            this.node_number = res.data;
          }
        });
        // 在线率
        this.$http("Ma_zong/onlineRadio").then(res => {
          if (res.status) {
            this.online_radio = res.data;
          }
        });
        // 设备数
        this.$http("Ma_zong/countAssets").then(res => {
          if (res.status) {
            this.count_assets = res.data;
          }
        });
      }, 5000);
    },
    // 入场动画
    transition() {
      setTimeout(() => {
        this.show.header = true;
        setTimeout(() => {
          this.show.videoChannel = true;
          this.show.menus = true;
          setTimeout(() => {
            this.show.devs = true;
            setTimeout(() => {
              this.show.nodes = true;
              setTimeout(() => {
                this.show.onOffLine = true;
              }, 50);
            }, 50);
          }, 50);
        }, 100);
      }, 50);
    }
  },
  created() {
    // 检测是否登录
    let reg = new RegExp("(^| )znyw_token=([^;]*)(;|$)");
    if (!document.cookie.match(reg)) {
      if (process.env.NODE_ENV === "production") {
        window.location.href = loginURL;
      } else {
        this.$Message.error("未登录!!");
      }
    } else {
      this.fetchAllData();
      this.realtimeFetchData();
    }
    // this.transition();
  }
};
</script>

<style lang="less" scoped>
.layout {
  width: 1920px;
  height: 1080px;
  position: relative;
  background: url("~@/assets/backdrop.png") #0d2c6d;
  &-header {
    width: 100%;
    height: 78px;
    background: url("~@/assets/header.png");
    &-logo {
      width: 261px;
      height: 32px;
      background: url("~@/assets/logo.png");
      position: absolute;
      left: 50%;
      top: 14px;
      transform: translate(-50%);
    }
  }
  &-body {
    display: table;
    height: 1002px;
    &-inner {
      display: table-cell;
      height: 100%;
      position: relative;
      vertical-align: top;
    }
    &-inner-left {
      width: 480px;
      &:after {
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
    }
    &-inner-content {
      width: 960px;
    }
    &-inner-right {
      width: 480px;
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
  }
}

.fadeInTop-enter-active {
  transition: all 0.3s ease;
}
.fadeInTop-enter {
  transform: translateY(-100px);
  opacity: 0;
}

.fadeInLeft-enter-active {
  transition: all 0.3s ease;
}
.fadeInLeft-enter {
  transform: translateX(-480px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter {
  opacity: 0;
}
</style>
