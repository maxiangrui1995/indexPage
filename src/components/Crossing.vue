<template>
    <div class="box">
        <div class="header">
            <ul class="menu">
                <li>中山北路路口节点01</li>
                <li>中山北路路口节点01</li>
                <li>中山北路路口节点01</li>
                <li>中山北路路口节点01</li>
                <li>中山北路路口节点01</li>
            </ul>
        </div>
        <div class="footer">
            <ul class="menu">
                <li class="active">某某镇</li>
                <li>某某镇</li>
                <li>某某镇</li>
            </ul>
            <div class="btn"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.box {
  width: 922px;
  height: 204px;
  background: url("~@/assets/footerbg.png");
  margin: 26px auto 0;
  padding: 0 20px;
  .header {
    height: 134px;
    border-bottom: 1px solid #073b69;
    padding-top: 26px;
    .menu {
      &:after {
        display: block;
        content: "";
        clear: both;
      }
      li {
        float: left;
        list-style: none;
        color: #67c7eb;
        font-size: 1.08em;
        padding: 0 10px;
        &:before {
          display: block;
          content: "正";
          background: url("~@/assets/cpustatus.png") no-repeat;
          width: 78px;
          height: 56px;
          line-height: 56px;
          margin: 0 auto 8px;
          text-align: center;
          font-size: 1.28em;
        }
      }
      .active {
        background: url("~@/assets/1-active.png") no-repeat;
        color: #fff;
      }
    }
  }
  .footer {
    height: 70px;
    position: relative;
    .menu {
      margin-top: 22px;
      padding-right: 30px;
      &:after {
        display: block;
        content: "";
        clear: both;
      }
      li {
        float: left;
        list-style: none;
        background: url("~@/assets/1.png") no-repeat;
        width: 123px;
        height: 30px;
        line-height: 30px;
        padding-left: 30px;
        margin-right: 15px;
        color: #67c7eb;
        font-size: 1.08em;
      }
      .active {
        background: url("~@/assets/1-active.png") no-repeat;
        color: #fff;
      }
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0;
      &:before {
        display: inline-block;
        content: "";
        width: 30px;
        height: 30px;
        background: url("~@/assets/leftbtn.png");
        margin-right: 9px;
      }
      &:after {
        display: inline-block;
        content: "";
        width: 30px;
        height: 30px;
        background: url("~@/assets/rightbtn.png");
      }
    }
  }
}
</style>
