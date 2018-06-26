<template>
  <transition name="fade">
    <div class="box" v-if="show">
      <p class="box-info hightlight">视频通道</p>
      <div class="box-content">
        <div class="box-content-title"></div>
        <Row class="box-content-body">
          <i-col span="8" class="box-content-body-inner-left">
            <div class="node-item" title="name">name</div>
          </i-col>
          <i-col span="16" class="box-content-body-inner-right">
            <div class="box-content-body-inner-item">设备厂家：海康</div>
            <div class="box-content-body-inner-item">生命周期：3年</div>
            <div class="box-content-body-inner-item">品牌型号：N-60</div>
            <div class="box-content-body-inner-item">建设单位：中威</div>
          </i-col>
        </Row>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 50);
  }
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  background: url("~@/assets/side-1-1.png") no-repeat;
  width: 100%;
  height: 390px;
  &-info {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 110px;
  }
  &-content {
    width: 430px;
    height: 320px;
    position: absolute;
    top: 46px;
    left: 30px;
    &-title {
      width: 100%;
      height: 260px;
      background: url("~@/assets/video.png");
      padding: 3px;
    }
    &-body {
      width: 100%;
      height: 60px;
      &-inner-left {
        position: relative;
        top: 25px;
        left: 5px;
      }
      &-inner-right {
        padding-top: 8px;
        padding-left: 10px;
      }
      &-inner-item {
        width: 50%;
        float: left;
        height: 30px;
        line-height: 30px;
        color: #cacaca;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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

