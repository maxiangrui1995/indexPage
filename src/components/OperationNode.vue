<template>
  <div class="box">
    <div class="title">运维节点</div>
    <div class="left">
      <div class="info">
        <span class="total">{{nodes_all}}</span>
        <span class="title">总节点(个)</span>
      </div>
    </div>
    <div class="right">
      <div class="info">
        <span class="total">{{node_loding}}</span>
        <span class="title">运行节点(个)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes_all: 0,
      node_loding: 0
    };
  },
  methods: {
    loadData() {
      this.NumAutoPlusAnimation("nodes_all", {
        num: 1334
      });
      this.NumAutoPlusAnimation("node_loding", {
        num: 33
      });
    },
    NumAutoPlusAnimation(count, options) {
      let finalNum = options.num;
      let step = Math.floor(finalNum / (1500 / 50));
      let timer = setInterval(() => {
        this[count] += step;
        if (this[count] >= finalNum) {
          clearInterval(timer);
        }
      }, 50);
    }
  },
  created() {
    this.loadData();
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
