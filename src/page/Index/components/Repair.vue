<template>
  <div class="wrapper">
    <div class="title">自动修复</div>
    <div class="box">
      <div class="view">
        <canvas ref="view" width="160" height="160"></canvas>
        <transition name="num-plus">
          <p v-if="show" class="add">+{{1}}</p>
        </transition>
        <div class="total">{{total}}</div>
      </div>
      <div class="info">
        <div class="item header">
          <div>自动修复率</div>
          <div class="num">{{auto_radio}}%</div>
        </div>
        <div class="item">
          <div>自动修复</div>
          <div class="num">{{automatic}}个</div>
        </div>
        <div class="item">
          <div>人工修复</div>
          <div class="num">{{artificial}}个</div>
        </div>
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
      show: false,
      total: 0, //自动修复数+人工修复数
      auto_radio: 0, //自动修复率
      automatic: 0, //自动修复数
      artificial: 0 //人工修复数
    };
  },
  methods: {
    view() {
      let c = this.$refs.view;
      let ctx = c.getContext("2d");
      let width = c.width;
      let height = c.height;

      let waveWidth = width * 2;
      let waveHeight = 12;
      let waveCount = 4;
      let startX = -width;
      let offset = 0;
      let offset2 = 0;
      let d = waveWidth / waveCount;

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        //绘制圆
        ctx.save();
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width / 2 - 1, 0, 2 * Math.PI, false);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#1788e4";
        ctx.stroke();
        ctx.clip();
        // 贝塞尔曲线
        let offsetY = height / 2;
        offset -= 1;
        if (-1 * offset >= d) offset = 0;
        offset2 -= 0.5;
        if (-1 * offset2 >= d) offset2 = 0;

        ctx.beginPath();
        ctx.moveTo(startX - offset2, offsetY);
        for (let i = 0; i < waveCount; i++) {
          let dx = i * waveWidth / waveCount;
          let offsetX = dx + startX - offset;
          ctx.quadraticCurveTo(
            offsetX + d / 4,
            offsetY + waveHeight,
            offsetX + d / 2,
            offsetY
          );
          ctx.quadraticCurveTo(
            offsetX + d / 4 + d / 2,
            offsetY - waveHeight,
            offsetX + d,
            offsetY
          );
        }
        ctx.lineTo(startX + waveWidth, height);
        ctx.lineTo(startX, height);
        ctx.fillStyle = "#1662a8";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(startX - offset2, offsetY);
        for (let i = 0; i < waveCount * 2; i++) {
          let dx = i * waveWidth / waveCount;
          let offsetX = dx + startX - offset2 - 30;
          ctx.quadraticCurveTo(
            offsetX + d / 4,
            offsetY + waveHeight,
            offsetX + d / 2,
            offsetY
          );
          ctx.quadraticCurveTo(
            offsetX + d / 4 + d / 2,
            offsetY - waveHeight,
            offsetX + d,
            offsetY
          );
        }
        ctx.fillStyle = "#1788e4";
        ctx.lineTo(startX + waveWidth, height);
        ctx.lineTo(startX, height);
        ctx.fill();
        ctx.restore();
        //绘制圆
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width / 2 - 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#1788e4";
        ctx.stroke();

        requestAnimationFrame(render);
      };

      render();
    },
    animationNum(finalNum, originNum, type) {
      let step = Math.ceil(finalNum / (1500 / 50)); //递增步数
      step = finalNum < originNum ? -step : step;

      let timer = setInterval(() => {
        originNum += step;
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum) ||
          step == 0
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[type] = originNum;
      }, 50);
    }
  },
  created() {
    this.$nextTick(() => {
      this.view();
    });
  },
  computed: {
    TOTAL() {
      return this.data.automatic + this.data.artificial;
    },
    msgRequire() {
      return this.$store.state.msgRequire;
    }
  },
  watch: {
    TOTAL() {
      this.animationNum(this.TOTAL, this.total, "total");
    },
    "data.artificial"(value) {
      this.animationNum(value, this.artificial, "artificial");
    },
    "data.auto_radio"(value) {
      this.animationNum(value, this.auto_radio, "auto_radio");
    },
    "data.automatic"(value) {
      this.animationNum(value, this.automatic, "automatic");
    },
    msgRequire(value) {
      if (value) {
        this.show = !this.show;
        if (value.message_type == "2") {
          this.automatic++;
        }
        if (value.message_type == "3") {
          this.artificial++;
        }
        this.total++;
        setTimeout(() => {
          this.show = !this.show;
        }, 2000);
      }
    }
  }
};
</script>

<style scoped lang="less">
.wrapper {
  height: 300px;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 479px;
    height: 43px;
    background: url("~@/assets/3.png");
  }
  .title {
    position: absolute;
    top: 0;
    left: 35px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 1.28em;
    text-shadow: 0px 0px 15px #fff;
  }
  .box {
    width: 100%;
    display: table;
    padding-top: 50px;
    .view {
      width: 200px;
      display: table-cell;
      text-align: center;
      position: relative;
      vertical-align: top;
      .total {
        color: #fff;
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        font-size: 2em;
      }
      .add {
        color: #fff;
        position: absolute;
        top: 30px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        font-size: 2em;
      }
    }
    .info {
      display: table-cell;
      .item {
        color: #fff;
        font-size: 1.48em;
        position: relative;
        .num {
          position: absolute;
          top: 0;
          right: 20px;
          color: #7acc31;
        }
      }
      .header {
        font-size: 1.88em;
        margin: 20px 0;
        .num {
          color: #cda952;
        }
      }
    }
  }
}
.num-plus-enter-active {
  transition: all 0.4s ease;
}
.num-plus-enter {
  transform: translatey(10px);
}
.num-plus-leave-active {
  transition: all 1s;
}
.num-plus-leave-to {
  transform: translatey(-20px);
}
.num-plus-enter,
.num-plus-leave-to {
  opacity: 0;
}
</style>
