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
      off_radio: 0
    };
  },
  methods: {
    drawView(elem, finalNum) {
      let canvas = elem;
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;

      let count = 0;
      let step = Math.ceil(finalNum / (1500 / 50));
      step = count < finalNum ? step : -step;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 2;
        ctx.beginPath();
        // 外层边框
        ctx.strokeStyle = "#08478f";
        ctx.rect(0, 0, width, height);
        ctx.stroke();
        // 内层
        ctx.beginPath();
        let pre = count / 100;
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
      render();
      let timer = setInterval(() => {
        count += step;
        if (
          (step > 0 && count >= finalNum) ||
          (step < 0 && count <= finalNum)
        ) {
          count = finalNum;
          clearInterval(timer);
        }
        render();
      }, 50);
    },
    animatedNumber(finalNum, originNum, type) {
      let step = Math.ceil(finalNum / (1500 / 50)); //递增步数
      step = finalNum < originNum ? -step : step;
      let timer = setInterval(() => {
        originNum += step;
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum)
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[type] = originNum;
      }, 50);
    }
  },
  watch: {
    "data.on_radio"(value) {
      let newValue = value.toFixed(2);
      this.drawView(this.$refs.canvas_online, newValue);
      this.animatedNumber(newValue, this.on_radio, "on_radio");
    },
    "data.off_radio"(value) {
      let newValue = value.toFixed(2);
      this.drawView(this.$refs.canvas_offline, newValue);
      this.animatedNumber(newValue, this.off_radio, "off_radio");
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
