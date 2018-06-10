<template>
    <div class="wrapper">
        <div class="logo"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@keyframes fade {
  from {
    opacity: 0;
    top: 0;
  }
  to {
    opacity: 1;
  }
}
.wrapper {
  width: 100%;
  height: 78px;
  background: url("~@/assets/header.png") top center no-repeat;
  .logo {
    width: 261px;
    height: 32px;
    background: url("~@/assets/logo.png") no-repeat;
    position: absolute;
    left: 50%;
    top: 14px;
    transform: translate(-50%);
    animation: fade 0.3s;
  }
}
</style>

