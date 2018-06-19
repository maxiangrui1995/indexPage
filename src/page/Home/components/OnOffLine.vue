<template>
  <div class="wrapper">
    <div class="item">
      <div class="title">实时在线率</div>
      <div class="info">
        <canvas width="370" height="20" ref="canvas_online"></canvas>
        <span>{{on_radio}}%</span>
      </div>
    </div>
    <div class="item">
      <div class="title">实时通断率</div>
      <div class="info">
        <canvas width="370" height="20" ref="canvas_offline"></canvas>
        <span>{{off_radio}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      on_radio: 0,
      off_radio: 0,
      //
      ON: 0,
      OFF: 0
    };
  },
  methods: {
    animatedView(canvas, finalNum, originNum, chart) {
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;

      let step = (finalNum - originNum) / (1500 / 50); //递增步数，允许浮点数
      let render = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 2;
        ctx.beginPath();
        // 外层边框
        ctx.strokeStyle = "#08478f";
        ctx.rect(0, 0, width, height);
        ctx.stroke();
        // 内层
        ctx.beginPath();
        let pre = originNum / 100;
        let grd = ctx.createLinearGradient(0, 0, width * pre, height);
        grd.addColorStop(0, "#08478f");
        grd.addColorStop(1, "#72d9f8");
        ctx.fillStyle = grd;
        let n = pre === 1 ? 20 : pre * 20;
        for (let i = 0; i < n; i++) {
          let w = (width - 4) / 20 - 4;
          let c = Math.floor(n);
          if (i < c) {
            ctx.fillRect(4 + (w + 4) * i, 4, w, height - 8);
          } else {
            ctx.fillRect(4 + (w + 4) * i, 4, w * (n - c), height - 8);
          }
        }
        ctx.fill();
      };
      let timer = setInterval(() => {
        originNum += step;
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum)
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[chart] = Number(originNum.toFixed(2));
        render();
      }, 25);
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    data(value) {
      this.ON = value.on_radio;
      this.OFF = value.off_radio;
    },
    ON(newValue) {
      let Value = Number(newValue.toFixed(2)) || 0;
      this.animatedView(
        this.$refs.canvas_online,
        Value,
        this.on_radio,
        "on_radio"
      );
    },
    OFF(newValue) {
      let Value = Number(newValue.toFixed(2)) || 0;
      this.animatedView(
        this.$refs.canvas_offline,
        Value,
        this.off_radio,
        "off_radio"
      );
    },
    isLogin() {
      setInterval(() => {
        this.$http.post("Ma_zong/onlineRadio", { tag: "njdh" }).then(res => {
          if (res.data) {
            this.ON = res.data.data.on_radio;
            this.OFF = res.data.data.off_radio;
          }
        });
      }, 5000);
    }
  }
};
</script>

<style scoped lang="less">
.wrapper {
  padding: 0 20px;
  .item {
    color: #fff;
    padding: 4px 0;
  }
  .title {
    margin-bottom: 2px;
  }
  .info {
    canvas {
      display: inline-block;
      width: 370px;
      height: 20px;
      vertical-align: top;
      background: transparent;
    }
    span {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      text-indent: 2px;
    }
  }
}
</style>
