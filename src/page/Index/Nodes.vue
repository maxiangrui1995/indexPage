<template>
  <transition name="fade">
    <div class="box" v-if="show">
      <div class="box-header hightlight">运维节点</div>
      <div class="box-body">
        <Row :gutter="100" class="box-body-inner">
          <i-col span="12" class="box-body-inner-item">
            <div class="box-body-inner-item-left"></div>
            <div class="box-body-inner-item-right">
              <div class="num">11111</div>
              <div>总节点(个)</div>
            </div>
          </i-col>
          <i-col span="12" class="box-body-inner-item">
            <div class="box-body-inner-item-left"></div>
            <div class="box-body-inner-item-right">
              <div class="num">11111</div>
              <div>总节点(个)</div>
            </div>
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
    }, 200);
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 36px;
  color: #cacaca;
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
    &-inner {
      padding: 20px;
    }
    &-inner-item {
      display: table;
      &-left {
        display: table-cell;
        width: 55px;
        height: 55px;
        vertical-align: top;
      }
      &-right {
        text-indent: 10px;
        div {
          height: 30px;
          line-height: 30px;
        }
      }
    }
    &-inner-item:nth-child(1) &-inner-item-left {
      background: url("~@/assets/node_sum.png") no-repeat;
    }
    &-inner-item:nth-child(2) &-inner-item-left {
      background: url("~@/assets/node_one.png") no-repeat;
    }
    .num {
      height: 30px;
      line-height: 30px;
      font-size: 1.48em;
      color: #5bbefc;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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
