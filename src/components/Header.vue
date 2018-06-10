<template>
  <div class="wrappper">
    <div class="logo"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.wrappper {
  width: 100%;
  height: 78px;
  background: url("~@/assets/header.png") top 100% no-repeat;
}
.logo {
  width: 261px;
  height: 32px;
  background: url("~@/assets/logo.png") no-repeat;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 14px);
}
</style>
