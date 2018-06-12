<template>
  <div class="wrapper">
    <div class="header">
      <div class="title hightlight">运维节点</div>
    </div>
    <div class="body">
      <div class="item sum">
        <div class="info">
          <p class="num">{{sum}}</p>
          <p>总节点(个)</p>
        </div>
      </div>
      <div class="item online">
        <div class="info">
          <p class="num">{{online}}</p>
          <p>运行节点(个)</p>
        </div>
      </div>
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
      let step = Math.ceil(finalNum / (1500 / 50)); //递增步数
      step = finalNum < originNum ? -step : step;
      let timer = setInterval(() => {
        originNum += step;
        if (
          (step > 0 && originNum >= finalNum) ||
          (step < 0 && originNum <= finalNum)
        ) {
          originNum = finalNum;
          clearInterval(timer);
        }
        this[type] = originNum;
      }, 50);
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

<style scoped lang="less">
.wrapper {
  padding-bottom: 20px;
  .header {
    width: 342px;
    height: 45px;
    background: url("~@/assets/4.png");
    margin: 0 auto;
    text-align: center;
    .title {
      line-height: 45px;
    }
  }
  .body {
    display: table;
    width: 100%;
    padding: 20px 30px;
    .item {
      width: 50%;
      display: table-cell;
      &:before {
        display: inline-block;
        content: "";
        width: 55px;
        height: 55px;
        vertical-align: top;
      }
      .info {
        width: 140px;
        display: inline-block;
        vertical-align: top;
        padding-left: 8px;
        color: #cacaca;
        p {
          height: 30px;
          line-height: 30px;
        }
        .num {
          font-size: 1.68em;
          color: #5bbefc;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .sum {
      &:before {
        background: url("~@/assets/nodes_sum.png") no-repeat;
      }
    }
    .online {
      &:before {
        background: url("~@/assets/nodes_online.png") no-repeat;
      }
    }
  }
}
</style>
