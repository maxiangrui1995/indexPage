<template>
  <div class="box">
    <div class="box-inner">
      <p class="box-inner-title">相机实时在线率</p>
      <div class="box-inner-body">
        <canvas width="380" height="22" class="box-inner-body-canvas" ref="canvas_online"></canvas>
        <span class="box-inner-body-num">{{on_radio}}%</span>
      </div>
    </div>
    <div class="box-inner">
      <p class="box-inner-title">相机实时通断率</p>
      <div class="box-inner-body">
        <canvas width="380" height="22" class="box-inner-body-canvas" ref="canvas_offline"></canvas>
        <span class="box-inner-body-num">{{off_radio}}%</span>
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
      off_radio: 0
    };
  },
  methods: {
    animatedView(finalNum, originNum, type, canvas) {
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;
      let step = (finalNum - originNum) / (1500 / 50); //递增步数，允许浮点数
      // 确保加减时的step相同
      if (step > 0) {
        step = Math.ceil(step);
      } else {
        step = -Math.ceil(Math.abs(step));
      }
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
      if (finalNum == originNum) return render();
      let timer = setInterval(() => {
        originNum += step;
        originNum = parseFloat(originNum.toFixed(2)); // 浮点数精度问题
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum) ||
          step == 0
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[type] = originNum;
        render();
      }, 25);
    }
  },
  watch: {
    "data.on_radio"(newValue) {
      this.$nextTick(() => {
        this.animatedView(
          newValue,
          this.on_radio,
          "on_radio",
          this.$refs.canvas_online
        );
      });
    },
    "data.off_radio"(newValue) {
      this.$nextTick(() => {
        this.animatedView(
          newValue,
          this.off_radio,
          "off_radio",
          this.$refs.canvas_offline
        );
      });
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  &-inner {
    padding-left: 30px;
    margin-bottom: 16px;
    &-title {
      color: #fff;
      height: 30px;
      line-height: 30px;
    }
    &-body {
      display: table;
      &-canvas {
        display: table-cell;
      }
      &-num {
        display: table-cell;
        width: 70px;
        vertical-align: middle;
        text-indent: 10px;
        color: #6acef0;
        overflow: hidden;
      }
    }
  }
}
</style>