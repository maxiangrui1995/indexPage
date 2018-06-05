<template>
  <div class="box">
    <div class="title">视频通道</div>
    <div class="wrapper">
      <div class="video"></div>
      <div class="info">
        <div class="left">
          <div class="item">潘黄镇</div>
        </div>
        <div class="right">
          <div class="item">设备厂家：海康</div>
          <div class="item">生命周期：3年</div>
          <div class="item">品牌型号：N-60</div>
          <div class="item">建设单位：中威</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.box {
  width: 470px;
  height: 390px;
  background: url("~@/assets/2.png");
  position: relative;
}
.title {
  position: absolute;
  top: -6px;
  left: 110px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: 1.28em;
  text-shadow: 0px 0px 15px #fff;
}
.wrapper {
  width: 430px;
  height: 334px;
  position: absolute;
  top: 45px;
  left: 25px;
  .video {
    width: 100%;
    height: 260px;
    background: url("~@/assets/video.png");
  }
  .info {
    display: table;
    width: 100%;
    height: 70px;
    margin-top: 5px;
    .left {
      display: table-cell;
      width: 150px;
      vertical-align: middle;
      padding-left: 6px;
      .item {
        width: 123px;
        height: 30px;
        line-height: 30px;
        background: url("~@/assets/1.png") no-repeat;
        color: #67c7eb;
        font-size: 1.18em;
        padding: 0 20px 0 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .right {
      display: table-cell;
      .item {
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
</style>
