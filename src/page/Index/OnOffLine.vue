<template>
    <transition name="fade">
        <div class="box" v-if="show">
            <div class="box-inner">
                <p class="box-inner-title">相机实时在线率</p>
                <div class="box-inner-body">
                    <canvas width="380" height="22" class="box-inner-body-canvas" ref="canvas_online"></canvas>
                    <span class="box-inner-body-num">20%</span>
                </div>
            </div>
            <div class="box-inner">
                <p class="box-inner-title">相机实时通断率</p>
                <div class="box-inner-body">
                    <canvas width="380" height="22" class="box-inner-body-canvas" ref="canvas_offline"></canvas>
                    <span class="box-inner-body-num">20%</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      on_radio: 0
    };
  },
  methods: {
    // canvas
    animateDrawView(canvas, finalNum, originNum, chart) {
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
  created() {
    // let Value = Number(newValue.toFixed(2)) || 0;
    this.$nextTick(() => {
      /* this.animateDrawView(
        this.$refs.canvas_online,
        20,
        this.on_radio,
        "on_radio"
      ); */
      setTimeout(() => {
        this.show = true;
      }, 250);
    });
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
.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}
</style>
