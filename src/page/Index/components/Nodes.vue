<template>
  <div class="box">
    <div class="box-header hightlight">运维节点</div>
    <div class="box-body">
      <Row class="box-body-inner">
        <i-col span="12" class="box-body-inner-item">
          <div class="box-body-inner-item-left"></div>
          <div class="box-body-inner-item-right">
            <div class="num">{{sum}}</div>
            <div>总节点(个)</div>
          </div>
        </i-col>
        <i-col span="12" class="box-body-inner-item">
          <div class="box-body-inner-item-left"></div>
          <div class="box-body-inner-item-right">
            <div class="num">{{online}}</div>
            <div>总节点(个)</div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      sum: 0,
      online: 0
    };
  },
  methods: {
    animatedNumber(finalNum, originNum, type) {
      if (finalNum == originNum) return;
      let step = Math.ceil((finalNum - originNum) / (1500 / 50)); //递增步数
      let timer = setInterval(() => {
        originNum += step;
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum) ||
          step == 0
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[type] = originNum;
      }, 25);
    }
  },
  watch: {
    "data.sum"(newValue) {
      this.animatedNumber(newValue, this.sum, "sum");
    },
    "data.online"(newValue) {
      this.animatedNumber(newValue, this.online, "online");
    }
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
    background: url("~@/assets/4.png");
    margin: 0 auto;
    text-align: center;
  }
  &-body {
    &-inner {
      padding: 30px 0;
    }
    &-inner-item {
      display: table;
      padding-left: 40px;
      &-left {
        display: table-cell;
        width: 55px;
        height: 55px;
        vertical-align: top;
      }
      &-right {
        width: 135px;
        text-indent: 10px;
        div {
          height: 30px;
          line-height: 30px;
        }
      }
    }
    &-inner-item:nth-child(1) &-inner-item-left {
      background: url("~@/assets/nodes_sum.png") no-repeat;
    }
    &-inner-item:nth-child(2) &-inner-item-left {
      background: url("~@/assets/nodes_online.png") no-repeat;
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
</style>