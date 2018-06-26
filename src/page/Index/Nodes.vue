<template>
    <transition name="fade">
        <div class="box" v-if="show">
            <div class="box-header hightlight">运维节点</div>
            <div class="box-body">

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
    }, 200);
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 36px;
  &-header {
    width: 342px;
    height: 45px;
    line-height: 45px;
    background: url("~@/assets/title-header.png");
    margin: 0 auto;
    text-align: center;
  }
  &-body {
    padding: 0 30px;
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
