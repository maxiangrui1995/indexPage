<template>
  <div class="wrapper">
    <div class="title hightlight">视频通道</div>
    <div class="box">
      <div class="header"></div>
      <div class="body">
        <div class="item">
          <div class="node">潘黄镇</div>
        </div>
        <div class="item">
          <div class="info">设备厂家：海康</div>
          <div class="info">生命周期：3年</div>
          <div class="info">品牌型号：N-60</div>
          <div class="info">建设单位：中威</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
  width: 470px;
  height: 390px;
  background: url("~@/assets/2.png");
  position: relative;
  margin-bottom: 40px;
  .title {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 110px;
  }
  .box {
    width: 430px;
    height: 334px;
    position: absolute;
    top: 45px;
    left: 25px;
    .header {
      width: 100%;
      height: 260px;
      background: url("~@/assets/video.png");
    }
    .body {
      display: table;
      width: 100%;
      height: 70px;
      margin-top: 5px;
      .item {
        display: table-cell;
      }
      .item:nth-child(1) {
        width: 150px;
        vertical-align: middle;
        padding-left: 6px;
      }
      .item:nth-child(2) {
        .info {
          display: inline-block;
          width: 135px;
          height: 30px;
          line-height: 30px;
          color: #cacaca;
          font-size: 14px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
