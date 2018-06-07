<template>
  <div class="box">
    <div class="title">运维节点</div>
    <div class="left">
      <div class="info">
        <span class="total">{{nodes}}</span>
        <span class="title">总节点(个)</span>
      </div>
    </div>
    <div class="right">
      <div class="info">
        <span class="total">{{node}}</span>
        <span class="title">运行节点(个)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 总节点
      nodes: 0,
      nodes_fetch: 0,
      // 运行节点
      node: 0,
      node_fetch: 0
    };
  },
  methods: {
    animationNum(finalNum, originNum, type) {
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
    },
    loadData() {
      this.nodes_fetch = 1322;
      this.node_fetch = 33;

      // Todo
      let timer = setTimeout(() => {
        this.nodes_fetch -= 500;
        this.node_fetch -= 13;
      }, 4000);
      let timer2 = setTimeout(() => {
        this.nodes_fetch += 453;
        this.node_fetch += 23;
      }, 8000);
    }
  },
  created() {
    this.loadData();
  },
  watch: {
    nodes_fetch() {
      this.animationNum(this.nodes_fetch, this.nodes, "nodes");
    },
    node_fetch() {
      this.animationNum(this.node_fetch, this.node, "node");
    }
  }
};
</script>

<style scoped lang="less">
.box {
  height: 160px;
  margin-top: 30px;
  > .title {
    width: 342px;
    height: 45px;
    line-height: 45px;
    background: url("~@/assets/4.png");
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 1.28em;
    text-shadow: 0px 0px 15px #fff;
  }
  .left {
    &:before {
      background: url("~@/assets/nodes.png");
    }
  }
  .right {
    &:before {
      background: url("~@/assets/node.png");
    }
  }
  .left,
  .right {
    width: 233px;
    display: inline-block;
    padding: 20px;
    &:before {
      display: inline-block;
      content: "";
      width: 55px;
      height: 55px;
      vertical-align: top;
    }
    .info {
      width: 115px;
      height: 60px;
      display: inline-block;
      .total {
        width: 100%;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-size: 2em;
        color: #5bbefc;
        text-indent: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .title {
        width: 100%;
        display: inline-block;
        text-indent: 12px;
        height: 30px;
        line-height: 30px;
        color: #cacaca;
      }
    }
  }
}
</style>
