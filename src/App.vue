<template>
  <IndexPage/>
</template>

<script>
import IndexPage from "@/page/Index/Index";

export default {
  name: "App",
  components: {
    IndexPage
  },
  methods: {
    IEVersion() {
      let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      let isIE =
        userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
      let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      let isIE11 =
        userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
      if (isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
          return 7;
        } else if (fIEVersion == 8) {
          return 8;
        } else if (fIEVersion == 9) {
          return 9;
        } else if (fIEVersion == 10) {
          return 10;
        } else {
          return 6; //IE版本<=7
        }
      } else if (isEdge) {
        return "edge"; //edge
      } else if (isIE11) {
        return 11; //IE11
      } else {
        return -1; //不是ie浏览器
      }
    },
    isInsalledIEVLC() {
      var vlcObj = null;
      var vlcInstalled = false;
      try {
        vlcObj = new ActiveXObject("VideoLAN.Vlcplugin.1");
        if (vlcObj != null) {
          vlcInstalled = true;
        }
      } catch (e) {
        vlcInstalled = false;
      }
      return vlcInstalled;
    }
  },
  beforeCreate() {
    this.$Loading.start();
  },
  created() {
    let ie = this.IEVersion();
    // if (ie !== -1 && ie < 10) {
    // this.$Message.warning({
    //   content: "当前浏览器版本" + ie,
    //   duration: 8
    // });
    // }
    this.$Message.info({
      content: "若视频无法播放，请检测VLC插件是否安装",
      duration: 8
    });
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>

<style>
</style>
