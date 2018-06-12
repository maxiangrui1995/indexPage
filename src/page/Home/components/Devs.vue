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
        <div class="tr" v-for="(item,index) in data" :key="index" :class="'bg'+index">
          <div class="td">{{item.name}}</div>
          <div class="td">{{item.count}}</div>
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
    transform: translateY(-210px);
  }
}
.wrapper {
  padding: 35px 0;
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
    padding-left: 26px;
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
    .table-header {
      padding-left: 44px;
    }
    .table-body {
      height: 115px;
      padding-left: 44px;
      overflow: hidden;
      padding-top: 3px;
      .tr {
        animation: anim-translate 25s linear infinite;
        animation-fill-mode: both;
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
          position: absolute;
          left: -48px;
          top: -3px;
        }
        .td:nth-child(1) {
          color: #8fd4f5;
        }
        .td:nth-child(2) {
          color: #36a5ff;
        }
      }
      //视频设备
      .bg0 {
        &:before {
          background: url("~@/assets/dev02.png") no-repeat;
        }
      }
      // 服务器
      .bg1 {
        &:before {
          background: url("~@/assets/dev01.png") no-repeat;
        }
      }
      // 动环设备
      .bg2 {
        &:before {
          background: url("~@/assets/dev03.png") no-repeat;
        }
      }
      // 机箱设备
      .bg3 {
        &:before {
          background: url("~@/assets/dev04.png") no-repeat;
        }
      }
      // 网络设备
      .bg4 {
        &:before {
          background: url("~@/assets/dev05.png") no-repeat;
        }
      }
    }
  }
}
</style>
