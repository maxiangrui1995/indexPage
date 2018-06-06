<template>
  <div class="box">
    <div class="item">
      <div class="title">在线率</div>
      <canvas ref="canvas" class="view" width="430" height="22"></canvas>
    </div>
    <div class="item">
      <div class="title">离线率</div>
      <canvas ref="canvas2" class="view" width="430" height="22"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      online: 80,
      offline: 32
    };
  },
  methods: {
    view(elem, pre) {
      let canvas = elem;
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;
      let wW = width - 60;

      let count = 0;
      const render = () => {
        count += 1;

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#08478f";
        ctx.rect(0, 0, wW, height);
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#67c7eb";
        ctx.textBaseline = "top";
        ctx.fillText(count + "%", wW + 15, 2);

        let grd = ctx.createLinearGradient(0, 0, wW, height);
        grd.addColorStop(0, "#08478f");
        grd.addColorStop(1, "#67c7eb");
        ctx.fillStyle = grd;
        ctx.fillRect(4, 4, (wW - 8) * count / 100, height - 8);
        ctx.beginPath();
        ctx.strokeStyle = "#040f2f";
        ctx.lineWidth = 2;
        for (let i = 1; i < 20; i++) {
          let x = 4 + (wW - 8) / 20 * i;
          ctx.moveTo(x, 4);
          ctx.lineTo(x, height - 4);
        }
        ctx.stroke();
        ctx.closePath();
        let timer = setInterval(() => {
          if (count >= pre) {
            count = pre;
            clearInterval(timer);
          }
          render();
        }, 150);
      };
      render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.view(this.$refs.canvas, this.online);
      this.view(this.$refs.canvas2, this.offline);
    });
  }
};
</script>

<style scoped lang='less'>
.box {
  padding: 0 20px;
  .item {
    .title {
      color: #fff;
      height: 30px;
      line-height: 30px;
    }
    .view {
      width: 100%;
      height: 22px;
    }
  }
}
</style>
