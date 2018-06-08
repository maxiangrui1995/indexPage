<template>
  <div class="box">
    <div class="title">设备监视</div>
    <div class="table-wrapper">
      <div class="table-header">
        <div class="tr">
          <div class="td">设备</div>
          <div class="td">统计</div>
        </div>
      </div>
      <div class="table-body">
        <div class="tr" v-for="(item,index) in data" :key="index">
          <div class="td">{{item.name}}</div>
          <div class="td success">{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
@keyframes anim-translate {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-220px);
  }
}
.box {
  height: 200px;
  margin-top: 40px;
  overflow: hidden;
  .title {
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
  .table-wrapper {
    .tr {
      display: table;
      margin-left: 80px;
      .td {
        display: table-cell;
        color: #cacaca;
        height: 38px;
        line-height: 38px;
      }
      .td:nth-child(1) {
        width: 200px;
        text-indent: 8px;
      }
      .td:nth-child(2) {
        width: 160px;
        text-align: right;
        padding-right: 40px;
      }
    }
    .table-header {
      padding-top: 3px;
    }
    .table-body {
      overflow: hidden;
      .tr {
        background: linear-gradient(to right, #1259c4, rgba(20, 64, 156, 0.2));
        border-left: 4px solid #fedb4b;
        font-size: 1.28em;
        position: relative;
        margin-top: 3px;
        margin-bottom: 20px;

        animation: anim-translate 25s linear infinite;
        animation-fill-mode: both;
        .td {
          color: #8fd4f5;
        }
        .success {
          color: #36a5ff;
        }
        .error {
          color: #ff5b5b;
        }
        &:before {
          display: block;
          content: "";
          width: 44px;
          height: 44px;
          background: url("~@/assets/camera.png") no-repeat;
          position: absolute;
          left: -60px;
          top: -3px;
        }
      }
    }
  }
}
</style>
