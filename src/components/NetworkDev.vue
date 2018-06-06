<template>
  <div class="box">
    <div class="title">网络设备</div>
    <div class="table">
      <div class="tr header">
        <div class="th">设备</div>
        <div class="th">正常</div>
        <div class="th">故障</div>
      </div>
      <div class="tr">
        <div class="td">摄像机</div>
        <div class="td success">2344</div>
        <div class="td error">43</div>
      </div>
      <div class="tr">
        <div class="td">供电</div>
        <div class="td success">45</div>
        <div class="td error">543</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.box {
  height: 200px;
  margin-top: 40px;
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
  .table {
    padding: 0 20px;
    .tr {
      display: table;
      margin-left: 60px;
      position: relative;
      .td,
      .th {
        display: table-cell;
        color: #cacaca;
        height: 38px;
        line-height: 38px;
      }
      .th:nth-child(1),
      .td:nth-child(1) {
        width: 160px;
        text-indent: 8px;
      }
      .th:nth-child(2),
      .td:nth-child(2) {
        width: 120px;
      }
      .th:nth-child(3),
      .td:nth-child(3) {
        width: 80px;
      }
    }
    .tr:nth-child(2) {
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
    }
    .tr:nth-child(3) {
      &:before {
        display: block;
        content: "";
        width: 44px;
        height: 44px;
        background: url("~@/assets/power.png") no-repeat;
        position: absolute;
        left: -60px;
        top: -3px;
      }
    }
    .tr:not(.header) {
      background: linear-gradient(to right, #1259c4, rgba(20, 64, 156, 0.2));
      border-left: 4px solid #fedb4b;
      font-size: 1.28em;
      .td {
        color: #8fd4f5;
      }
      .success {
        color: #36a5ff;
      }
      .error {
        color: #ff5b5b;
      }
    }
  }
}
</style>
