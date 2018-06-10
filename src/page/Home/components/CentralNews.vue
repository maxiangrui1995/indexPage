<template>
    <div class="wrapper">
        <div class="wrapper-bg"></div>
        <div class="wrapper-bg"></div>
        <div class="msg-header">
            <div class="item">
                维修单位：
                <span>南京盾华智慧交通</span>
            </div>
            <div class="item">
                维修状态：
                <span>已接单</span>
            </div>
        </div>
        <div class="msg-type">
            <div class="info">中山北路和太平路口摄像机故障</div>
        </div>
        <div class="msg-content">
            <div class="title">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        </div>
        <div class="msg-grade">
            <div class="title">供电故障</div>
            <div class="info">
                地点：
                <span>中山北路和太平路</span>
            </div>
            <div class="info">
                原因：
                <span>市政停电检修</span>
            </div>
        </div>
        <div class="msg-loading">
            <div class="modal-wrapper">
                <div class="view">
                    <canvas ref="canvas_loading" width="140" height="140"></canvas>
                </div>
                <div class="info">
                    <p>正在自动修复中</p>
                    <p>请稍后...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loading: 0,
      loading_fetch: 0
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
    loadData() {
      this.loading_fetch = 100;
    }
  },
  created() {
    this.$nextTick(() => {
      this.loadData();
    });
  },
  watch: {
    loading_fetch() {
      this.draw();
    }
  }
};
</script>

<style scoped lang='less'>
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
@keyframes msg-header {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 50px;
    opacity: 1;
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
  .msg-header {
    width: 393px;
    height: 126px;
    background: url("~@/assets/modal01.png");
    position: absolute;
    top: 50px;
    left: 245px;
    color: #38a9fc;
    padding: 30px 0;
    animation: msg-header 1.5s;
    .item {
      height: 30px;
      line-height: 30px;
      text-indent: 30px;
      span {
        color: #fff;
      }
    }
  }
  .msg-type {
    width: 339px;
    height: 85px;
    background: url("~@/assets/modal02.png");
    color: #cda952;
    position: absolute;
    top: 190px;
    left: 35px;
    .info {
      margin-top: 30px;
      text-indent: 30px;
    }
  }
  .msg-content {
    width: 393px;
    height: 126px;
    background: url("~@/assets/modal01.png");
    color: #fff;
    padding: 30px 0;
    position: absolute;
    top: 290px;
    left: 220px;
    .title {
      height: 30px;
      line-height: 30px;
      padding: 0 30px;
    }
  }
  .msg-grade {
    width: 323px;
    height: 154px;
    background: url("~@/assets/modal05.png");
    color: #fff;
    padding: 30px 0;
    position: absolute;
    top: 250px;
    right: -16px;
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
  .msg-loading {
    width: 393px;
    height: 185px;
    background: url("~@/assets/modal04.png");
    color: #fff;
    padding: 30px 10px;
    position: absolute;
    left: 125px;
    bottom: 35px;
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
        padding: 30px 0;
      }
    }
  }
}
</style>
