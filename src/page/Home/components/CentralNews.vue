<template>
  <div class="wrapper">
    <div class="wrapper-bg"></div>
    <div class="wrapper-bg"></div>

    <div class="msg-tip" v-show="msgTip">警告！</div>

    <transition name="msg-crossing">
      <div class="msg-crossing" v-show="msgCrossing">
        <div class="info">{{nowShowData.crossing_name}}</div>
      </div>
    </transition>

    <transition name="msg-content">
      <div class="msg-content" v-show="msgContent">
        <div class="title">{{nowShowData.memo}}</div>
      </div>
    </transition>

    <transition name="msg-type">
      <div class="msg-type" v-show="msgType">
        <div class="title">{{relation.message_type[nowShowData.message_type]}}</div>
        <div class="info">
          等级：
          <span>{{nowShowData.level}}</span>
        </div>
        <div class="info">
          原因：
          <span>{{relation.fault_type[nowShowData.fault_type]}}</span>
        </div>
      </div>
    </transition>

    <transition name="msg-loading">
      <div class="msg-loading" v-show="msgLoading">
        <div class="modal-wrapper">
          <div class="view">
            <canvas ref="canvas_loading" width="140" height="140"></canvas>
          </div>
          <div class="info">
            {{msgLoadingtitle}}
          </div>
        </div>
      </div>
    </transition>

    <transition name="msg-plain">
      <div class="msg-plain" v-show="msgPlain">
        <span>{{msgPlainText}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: { data: Array },
  data() {
    const relation = {
      message_type: {
        "0": "机箱故障",
        "1": "相机故障",
        "2": "故障自动修复",
        "3": "故障人工修复"
      },
      fault_type: {
        "0": "视频正常",
        "1": "视频打不开",
        "2": "视频偏色",
        "3": "视频遮挡",
        "4": "视频冻结",
        "5": "亮度异常",
        "6": "用户名或密码错或设备RTSP服务异常",
        "7": "设备未提供RTSP协议连结",
        "8": "设备PING不通，网络故障",
        "9": "提供的ID编号或url有误 ",
        "50": "设备故障",
        "52": "网络故障",
        "54": "服务器离线",
        "100": "供电故障",
        "102": "网络连接故障",
        "104": "光端机激光输出故障",
        "106": "光端机电路故障",
        "108": "机箱停电故障",
        "110": "设备故障",
        "112": "空开故障",
        "114": "门禁检测"
      }
    };
    return {
      loading: 0,
      loading_fetch: 0,
      // 字段关系
      relation: relation,
      // 动画
      msgTip: false,
      msgCrossing: false,
      msgContent: false,
      msgType: false,
      msgLoading: false,
      msgLoadingtitle: "",
      msgPlain: false,
      msgPlainText: "",
      // 实时请求的数据
      featchData: [],
      // 当前展示的数据
      nowShowData: {},
      // 当前消息类型
      genre: "repair"
    };
  },
  methods: {
    draw() {
      let canvas = this.$refs.canvas_loading;
      let width = canvas.width;
      let height = canvas.height;
      let ctx = canvas.getContext("2d");
      let cx = width / 2;
      let cy = height / 2;
      let r = height / 2;
      let PI = Math.PI;

      let count = this.loading;
      let finalNum = this.loading_fetch;
      let step = Math.ceil(finalNum / (1500 / 50));
      const render = () => {
        ctx.clearRect(0, 0, width, height);

        // 绘制外圈圆
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(23, 136, 228, 0.5)";
        ctx.fillStyle = "rgba(7, 43, 92, .3)";
        ctx.arc(cx, cy, r - 1, 0, 2 * PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.save();
        // 绘制进度
        ctx.beginPath();
        ctx.strokeStyle = "#35e7fc";
        ctx.setLineDash([7]);
        ctx.lineWidth = 12;
        let pre = 270 - 360 * count / 100;
        ctx.arc(cx, cy, r - 12, 270 * PI / 180, pre * PI / 180, true);
        ctx.stroke();
        // 绘制内圈
        ctx.beginPath();
        ctx.strokeStyle = "rgba(23, 136, 228, 0.2)"; //072b5c
        ctx.fillStyle = "#0f2860";
        ctx.lineWidth = 2;
        ctx.setLineDash([3]);
        ctx.arc(width / 2, height / 2, r - 25, 0, 2 * PI, false);
        ctx.stroke();
        ctx.fill();
        // 文字
        ctx.beginPath();
        ctx.font =
          "26px PingFang SC,Helvetica,Microsoft YaHei,Arial,sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.fillText(count + "%", cx, cy - 3);
        ctx.beginPath();
        ctx.fillStyle = "#ccc";
        ctx.font =
          "12px PingFang SC,Helvetica,Microsoft YaHei,Arial,sans-serif";
        ctx.fillText(count + " / 100", cx, cy + 18);
        ctx.restore();
      };
      render();
      let timer = setInterval(() => {
        count += step;
        if (count >= finalNum) {
          count = finalNum;
          clearInterval(timer);
        }
        this.loading = count;
        render();
      }, 50);
    },
    // 实时请求新数据 5s
    loopFetchData() {
      setInterval(() => {
        this.$http.post("Ma_zong/controlCenter").then(res => {
          let data = res.data.data;
          if (data.length) {
            this.featchData.push(...res.data.data);
          } else {
            this.featchData.push(false);
          }
        });
      }, 5000);
    },
    // 定义线程
    lwp() {
      let data = this.data;

      if (data.length) {
        if (data[0]) {
          if (data[0].message_type == "2" || data[0].message_type == "3") {
            this.repairAnimate();
          } else {
            this.failureAnimate();
          }
        } else {
          this.plainAnnimate();
        }
      } else {
        if (this.featchData.length) {
          this.data.push(...this.featchData);
          this.featchData = [];
        } else {
          this.data.push(false);
        }
      }
    },
    // 故障报警动画
    failureAnimate() {
      this.msgTip = !this.msgTip;
      setTimeout(() => {
        this.nowShowData = this.data[0];
        this.msgTip = !this.msgTip;
        this.msgCrossing = !this.msgCrossing;
        setTimeout(() => {
          this.msgType = !this.msgType;
          setTimeout(() => {
            this.msgContent = !this.msgContent;
            setTimeout(() => {
              this.msgCrossing = !this.msgCrossing;
              this.msgType = !this.msgType;
              this.msgContent = !this.msgContent;
              setTimeout(() => {
                this.$store.commit("setMsgFailure", this.data[0]);
                this.data.shift();
              }, 2600);
            }, 3500);
          }, 1000);
        }, 1000);
      }, 3700);
    },
    // 自动修复动画
    repairAnimate() {
      setTimeout(() => {
        this.nowShowData = this.data[0];
        this.msgLoadingtitle = "正在自动修复中请稍后...";
        this.loading_fetch = 0;
        this.msgCrossing = !this.msgCrossing;
        setTimeout(() => {
          this.msgType = !this.msgType;
          setTimeout(() => {
            this.msgLoading = !this.msgLoading;
            setTimeout(() => {
              this.loading_fetch = 100;
              setTimeout(() => {
                this.msgLoadingtitle = "修复成功";
                this.$store.commit("setMsgRequire", this.data[0]);
                setTimeout(() => {
                  this.msgCrossing = !this.msgCrossing;
                  this.msgType = !this.msgType;
                  this.msgLoading = !this.msgLoading;
                  this.data.shift();
                }, 1000);
              }, 1300);
            }, 500);
          }, 1000);
        }, 1000);
      }, 3500);
    },
    // 普通状态动画
    plainAnnimate() {
      let textArray = ["设备巡检...", "视频检测...", "巡检修复..."];
      let index = Math.floor(Math.random() * 3);
      this.msgPlainText = textArray[index];

      setTimeout(() => {
        this.msgPlain = !this.msgPlain;
        setTimeout(() => {
          this.msgPlain = !this.msgPlain;
          setTimeout(() => {
            this.data.shift();
          }, 3000);
        }, 3000);
      }, 1000);
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    loading_fetch() {
      this.draw();
    },
    data(value) {
      this.lwp();
    },
    isLogin() {
      this.loopFetchData();
    }
  }
};
</script>

<style scoped lang='less'>
// 动画-圆转圈
@keyframes anim-circle {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes anim-circle-anticlockwise {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(-360deg);
  }
}
@keyframes anim-msg-tip {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.msg-tip {
  width: 342px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
  position: absolute;
  color: #dc7e1a;
  text-align: center;
  background: url("~@/assets/4_2.png");
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation: anim-msg-tip 2s ease-in infinite;
  animation-fill-mode: both;
}

@keyframes anim-msg-crossing {
  0% {
    left: 0;
    opacity: 0;
  }
  100% {
    left: 104px;
    opacity: 1;
  }
}
.msg-crossing-enter-active {
  animation: anim-msg-crossing 1.5s;
}
.msg-crossing-leave-active {
  animation: anim-msg-crossing 0.5s reverse;
}
.msg-crossing {
  width: 339px;
  height: 85px;
  background: url("~@/assets/modal02.png");
  color: #cda952;
  position: absolute;
  top: 121px;
  left: 104px;
  .info {
    margin-top: 30px;
    text-indent: 30px;
  }
}
@keyframes anim-msg-content {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes anim-msg-content-leave {
  0% {
    transform: rotateZ(0deg) scale(1);
  }
  30% {
    opacity: 1;
    transform: rotateZ(30%) scale(0.4, 1);
  }
  50% {
    opacity: 1;
    transform: rotateZ(1024deg) scale(0.4, 1);
    top: 160px;
    left: 965px;
  }
  100% {
    opacity: 0;
    transform: rotateZ(1440deg) scale(0.4, 1);
    top: 160px;
    left: 965px;
  }
}
.msg-content-enter-active {
  animation: anim-msg-content 1.5s;
}
.msg-content-leave-active {
  animation: anim-msg-content-leave 2.6s linear;
}
.msg-content {
  width: 393px;
  height: 126px;
  background: url("~@/assets/modal01.png");
  color: #fff;
  padding: 30px 0;
  position: absolute;
  top: 390px;
  left: 140px;
  .title {
    height: 30px;
    line-height: 30px;
    padding: 0 30px;
  }
}
@keyframes anim-msg-type {
  0% {
    opacity: 0;
    right: 0;
  }
  100% {
    opacity: 1;
    right: 145px;
  }
}
.msg-type-enter-active {
  animation: anim-msg-type 1.5s;
}
.msg-type-leave-active {
  animation: anim-msg-type 0.5s reverse;
}
.msg-type {
  width: 323px;
  height: 154px;
  background: url("~@/assets/modal05.png");
  color: #fff;
  padding: 30px 0;
  position: absolute;
  top: 206px;
  right: 145px;
  .title {
    color: #ff5b5b;
    font-size: 1.28em;
    text-indent: 30px;
  }
  .info {
    height: 30px;
    line-height: 30px;
    text-indent: 30px;
    color: #38a9fc;
    span {
      color: #fff;
    }
  }
}
@keyframes anim-msg-loading {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100% {
    opacity: 1;
    bottom: 70px;
  }
}
.msg-loading-enter-active {
  animation: anim-msg-loading 1.5s;
}
.msg-loading-leave-active {
  animation: anim-msg-loading 0.5s reverse;
}
.msg-loading {
  width: 393px;
  height: 185px;
  background: url("~@/assets/modal04.png");
  color: #fff;
  padding: 30px 10px;
  position: absolute;
  left: 125px;
  bottom: 70px;
  .modal-wrapper {
    display: table;
    .view {
      display: table-cell;
      width: 160px;
      height: 140px;
      text-align: center;
      vertical-align: bottom;
    }
    .info {
      display: table-cell;
      vertical-align: top;
      width: 210px;
      height: 140px;
      text-align: center;
      font-size: 1.38em;
      padding: 30px 15px;
    }
  }
}
@keyframes anim-msg-plain {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.msg-plain-enter-active {
  animation: anim-msg-plain 2s linear;
}
.msg-plain-leave-active {
  animation: anim-msg-plain 2s linear reverse;
}
.msg-plain {
  width: 339px;
  height: 85px;
  text-align: center;
  position: absolute;
  top: 305px;
  left: 310px;
  background: url("~@/assets/modal02.png");
  span {
    line-height: 85px;
    font-size: 1.28em;
    color: #dc7e1a;
    display: inline-block;
  }
}
.wrapper {
  width: 934px;
  height: 675px;
  background: url("~@/assets/newsbg.png");
  margin: 0 auto;
  position: relative;
  font-size: 1.18em;
  &-bg {
    overflow: hidden;
    position: absolute;
    &:before {
      width: 788px;
      height: 739px;
      display: block;
      content: "";
      background: url("~@/assets/circle.png") no-repeat;
      animation-fill-mode: both;
    }
  }
  &-bg:nth-child(1) {
    width: 490px;
    height: 606px;
    top: 34px;
    left: 22px;
    &:before {
      margin-left: -300px;
      transform-origin: 313px 342px;
      background-position: 0 -42px;
      animation: anim-circle 60s linear infinite;
    }
  }
  &-bg:nth-child(2) {
    width: 490px;
    height: 602px;
    top: 39px;
    right: 27px;
    &:before {
      transform-origin: 500px 340px;
      background-position: 185px -48px;
      animation: anim-circle-anticlockwise 60s linear infinite;
    }
  }
}
</style>
