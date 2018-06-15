<template>
  <div :class="{'g0':num===0,'g1':num===1,'g2':num===2,'g3':num===3,'g4':num===4,'g5':num===5}"></div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.g0 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g0.png");
}
.g2 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g1.png");
}
.g2 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g2.png");
}
.g3 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g3.png");
}
.g4 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g4.png");
}
.g5 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g5.png");
}
</style>
