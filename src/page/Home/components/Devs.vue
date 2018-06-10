<template>
  <div class="wrapper">
    <div class="header">
      <div class="title hightlight">设备监视</div>
    </div>
    <div class="body">
      <div class="table-header">
        <div class="tr">
          <div class="td">设备</div>
          <div class="td">统计</div>
        </div>
      </div>
      <div class="table-body">
        <div class="tr" v-for="(item,index) in data" :key="index">
          <div class="td">{{item.name}}</div>
          <div class="td">{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{ name: "摄像机", count: 1 }, { name: "供电", count: 1 }]
    };
  }
};
</script>

<style scoped lang="less">
.wrapper {
  height: 220px;
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
    padding: 0 40px 0 85px;
    .tr {
      display: table;
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
    .table-body {
      .tr {
        height: 30px;
        background: linear-gradient(to right, #1259c4, rgba(20, 64, 156, 0.2));
        border-left: 4px solid #fedb4b;
        position: relative;
        margin-bottom: 20px;
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
        .td:nth-child(1) {
          color: #8fd4f5;
        }
        .td:nth-child(2) {
          color: #36a5ff;
        }
      }
    }
  }
}
</style>
