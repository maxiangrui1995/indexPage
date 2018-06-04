<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <div class="wrapper-header-logo"></div>
        </div>
        <div style="position:relative;">
            <div class="wrapper-center">
                <div class="wrapper-center-header">
                    <ul class="menu">
                        <li class="active">首页</li>
                        <li>资产管理</li>
                        <li>数据可视化</li>
                        <li>诊断</li>
                        <li>统计分析</li>
                    </ul>
                    <div class="datetime">{{dateTime}}</div>
                </div>
                <div class="wrapper-center-content">
                    <div class="wrapper-center-content-circlebg-left"></div>
                    <div class="wrapper-center-content-circlebg-right"></div>
                </div>
                <div class="wrapper-center-footer">
                    <ul class="menu-details">
                        <li>
                            <b>正</b>
                            <span>中山北路路口节点01asdasdasdasdasdasdsadasdsadaas</span>
                        </li>
                        <li>
                            <b>正</b>
                            <span>中山北路路口节点01</span>
                        </li>
                        <li>
                            <b>正</b>
                            <span>中山北路路口节点01</span>
                        </li>
                        <li>
                            <span>中山北路路口节点01</span>
                        </li>
                        <li>
                            <span>中山北路路口节点01</span>
                        </li>
                    </ul>
                    <ul class="menu">
                        <li class="active">
                            <span>潘黄镇</span>
                        </li>
                        <li>
                            <span>潘黄镇</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="wrapper-left">
                <div class="wrapper-left-video">
                    <div class="logo">
                        <span>视频通道</span>
                    </div>
                    <div class="video-wrapper">
                        <div class="video">

                        </div>
                        <div class="info">
                            <div class="left">
                                <div class="video-info">潘黄镇</div>
                            </div>
                            <div class="right">
                                <div class="video-info-item">
                                    设备厂家：海康
                                </div>
                                <div class="video-info-item">
                                    生命周期：3年
                                </div>
                                <div class="video-info-item">
                                    品牌型号：N-60
                                </div>
                                <div class="video-info-item">
                                    建设单位：中威
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      dateTime: ""
    };
  },
  methods: {
    getDateTime() {
      let d = new Date();
      let YY = d.getFullYear();
      let MM = d.getMonth();
      let DD = d.getDate();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      h = h < 10 ? `0${h}` : h;
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;
      this.dateTime = `${YY}年${MM + 1}月${DD}日 ${h}:${m}:${s}`;
    },
    refreshDateTime() {
      this.getDateTime();
      setInterval(() => {
        this.getDateTime();
      }, 1000);
    }
  },
  created() {
    this.refreshDateTime();
  },
  mounted() {}
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
