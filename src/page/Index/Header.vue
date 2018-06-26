<template>
  <transition name="fade">
    <div class="box" v-if="show">
      <div class="box-logo"></div>
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
  width: 100%;
  height: 78px;
  background: url("~@/assets/header.png") top center;
  position: relative;
  &-logo {
    width: 261px;
    height: 32px;
    background: url("~@/assets/logo.png") no-repeat;
    position: absolute;
    left: 50%;
    top: 14px;
    transform: translate(-50%);
  }
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-78px);
  opacity: 0;
}
</style>
