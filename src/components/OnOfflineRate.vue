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
      online: 0,
      offline: 0,
      online_fetch: 0,
      offline_fetch: 0
    };
  },
  methods: {
    view(elem, pre, type) {
      let canvas = elem;
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;
      let wW = width - 60;

      let count = this[type];
      let step = Math.ceil(pre / (1500 / 50));
      step = count < pre ? step : -step;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#08478f";
        ctx.rect(0, 0, wW, height);
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#67c7eb";
        ctx.textBaseline = "top";
        ctx.fillText(Math.floor(count) + "%", wW + 15, 2);

        let grd = ctx.createLinearGradient(
          0,
          0,
          (wW - 8) * count / 100,
          height
        );
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
      };
      render();
      let timer = setInterval(() => {
        count += step;
        if ((step > 0 && count >= pre) || (step < 0 && count <= pre)) {
          count = pre;
          clearInterval(timer);
        }
        this[type] = count;
        render();
      }, 50);
    },
    loadData() {
      this.online_fetch = 73;
      this.offline_fetch = 30;

      setTimeout(() => {
        this.online_fetch = 40;
        this.offline_fetch = 77;
      }, 4000);
      setTimeout(() => {
        this.online_fetch = 55;
        this.offline_fetch = 62;
      }, 8000);
    }
  },
  created() {
    this.loadData();
  },
  watch: {
    online_fetch() {
      this.view(this.$refs.canvas, this.online_fetch, "online");
    },
    offline_fetch() {
      this.view(this.$refs.canvas2, this.offline_fetch, "offline");
    }
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
