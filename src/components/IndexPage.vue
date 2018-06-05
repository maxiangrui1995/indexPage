<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-header-logo"></div>
        </div>
        <div class="layout-content">
            <div class="layout-content-left">
                <div class="layout-content-left-header">
                    <div class="title">视频通道</div>
                    <div class="video-wrapper">
                        <div class="video"></div>
                        <div class="info">
                            <div class="info-left">
                                <div class="info-left-title">潘黄镇</div>
                            </div>
                            <div class="info-right">
                                <div class="info-right-item">
                                    设备厂家：海康
                                </div>
                                <div class="info-right-item">
                                    生命周期：3年
                                </div>
                                <div class="info-right-item">
                                    品牌型号：N-60
                                </div>
                                <div class="info-right-item">
                                    建设单位：中威
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layout-content-left-content">
                    <div class="layout-content-left-content-item">
                        <div class="title">网络设备</div>
                        <div class="info-table">
                            <div class="tr header">
                                <div class="th">设备</div>
                                <div class="th">正常</div>
                                <div class="th">故障</div>
                            </div>
                            <div class="tr">
                                <div class="td">摄像机</div>
                                <div class="td success">2344</div>
                                <div class="td error">43</div>
                            </div>
                            <div class="tr">
                                <div class="td">供电</div>
                                <div class="td success">45</div>
                                <div class="td error">543</div>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-left-content-item">
                        <div class="title">运维节点</div>
                        <div class="item-left">
                            <div class="info">
                                <div class="total">1430</div>
                                <div>总节点(个)</div>
                            </div>
                        </div>
                        <div class="item-right">
                            <div class="info">
                                <div class="total">33</div>
                                <div>运行节点(个)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layout-content-left-footer">
                    <div class="item-wrapper">
                        <div>在线率</div>
                    </div>
                    <div class="item-wrapper">
                        <div>离线率</div>
                    </div>
                </div>
            </div>
            <div class="layout-content-center">
                <div class="layout-content-center-header">
                    <div class="datetime">{{dateTime}}</div>
                </div>
                <div class="layout-content-center-content">
                    <div class="circle-left"></div>
                    <div class="circle-right"></div>
                </div>
                <div class="layout-content-center-footer"></div>
            </div>
            <div class="layout-content-right">
                <div class="layout-content-right-item">
                    <div class="title">故障原因</div>
                    <div class="item-wrapper">
                        <div class="header">
                            <div class="img"></div>
                            <div class="info">
                                <div>
                                    中山东路
                                </div>
                                <div>
                                    <Rate disabled :value="2"></Rate>
                                </div>
                                <div>
                                    维修状态
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <div class="label">故障原因：</div>
                            <div class="span">线路故障或供电故障</div>
                        </div>
                    </div>
                    <div class="item-wrapper">
                        <div class="header">
                            <div class="img"></div>
                            <div class="info">
                                <div>
                                    中山东路
                                </div>
                                <div>
                                    <Rate disabled :value="2"></Rate>
                                </div>
                                <div>
                                    维修状态
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <div class="label">故障原因：</div>
                            <div class="span">线路故障或供电故障</div>
                        </div>
                    </div>
                    <div class="item-wrapper">
                        <div class="header">
                            <div class="img"></div>
                            <div class="info">
                                <div>
                                    中山东路
                                </div>
                                <div>
                                    <Rate disabled :value="2"></Rate>
                                </div>
                                <div>
                                    维修状态
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <div class="label">故障原因：</div>
                            <div class="span">线路故障或供电故障</div>
                        </div>
                    </div>
                </div>
                <div class="layout-content-right-item">
                    <div class="title">自动修复</div>
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
