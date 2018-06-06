<template>
    <div class="box">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
@keyframes anim-circle {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes anim-circle-anticlockwise {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(-360deg);
  }
}
.box {
  width: 934px;
  height: 675px;
  background: url("~@/assets/midbg.png");
  margin: 0 auto;
  position: relative;
  .bg-left {
    width: 490px;
    height: 606px;
    overflow: hidden;
    position: absolute;
    top: 34px;
    left: 22px;
    &:before {
      width: 788px;
      height: 739px;
      display: block;
      content: "";
      margin-left: -300px;
      background: url("~@/assets/circle.png") no-repeat;
      transform-origin: 313px 342px;
      background-position: 0 -42px;
      animation: anim-circle 25s linear infinite;
      animation-fill-mode: both;
    }
  }
  .bg-right {
    width: 490px;
    height: 602px;
    overflow: hidden;
    position: absolute;
    top: 39px;
    right: 27px;
    &:before {
      width: 788px;
      height: 739px;
      display: block;
      content: "";
      background: url("~@/assets/circle.png") no-repeat;
      transform-origin: 500px 340px;
      background-position: 185px -48px;
      animation: anim-circle-anticlockwise 25s linear infinite;
      animation-fill-mode: both;
    }
  }
}
</style>
