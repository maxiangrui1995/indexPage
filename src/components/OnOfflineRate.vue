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
  methods: {
    view(elem) {
      let canvas = elem;
      let ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#08478f";
      ctx.rect(0, 0, width - 60, height);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.font = "14px Arial";
      ctx.fillStyle = "#67c7eb";
      ctx.textBaseline = "top";
      ctx.fillText("80%", width - 45, 2);
      ctx.closePath();
      ctx.beginPath();
      let grd = ctx.createLinearGradient(
        4,
        4,
        (width - 60 - 4) * 0.8,
        height - 8
      );
      grd.addColorStop(0, "#08478f");
      grd.addColorStop(1, "#67c7eb");
      ctx.fillStyle = grd;
      ctx.fillRect(4, 4, (width - 60 - 4) * 0.8, height - 8);
      ctx.closePath();
    }
  },
  created() {
    this.$nextTick(() => {
      this.view(this.$refs.canvas);
      this.view(this.$refs.canvas2);
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
