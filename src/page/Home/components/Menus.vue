<template>
    <div class="wrapper">
        <ul class="menu">
            <li class="active">首页</li>
            <li class="zcgl">资产管理</li>
            <li class="sjksh">数据可视化</li>
            <li class="zd">诊断</li>
            <li class="tjfx">统计分析</li>
        </ul>
        <div class="datetime">{{dateTime}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return { dateTime: "" };
  },
  methods: {
    getDateTime() {
      let d = new Date();
      let YY = d.getFullYear();
      let MM = d.getMonth();
      let DD = d.getDate();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      h = h < 10 ? `0${h}` : h;
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;
      this.dateTime = `${YY}年${MM + 1}月${DD}日 ${h}:${m}:${s}`;
    },
    refreshDateTime() {
      this.getDateTime();
      setInterval(() => {
        this.getDateTime();
      }, 1000);
    }
  },
  created() {
    this.refreshDateTime();
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 966px;
  height: 57px;
  background: url("~@/assets/menuline.png");
  position: relative;
  margin-bottom: 15px;
  .menu {
    max-width: 636px;
    margin: 0 auto;
    li {
      height: 36px;
      line-height: 36px;
      list-style: none;
      float: left;
      color: #67c7eb;
      font-size: 1.28em;
      padding-left: 55px;
      margin-left: 20px;
    }
    li:first-child {
      margin-left: 10px;
      padding-left: 0;
    }
    .active {
      color: #fff;
    }
    .zcgl {
      background: url("~@/assets/5.png") no-repeat;
    }
    .sjksh {
      background: url("~@/assets/5.png") no-repeat;
    }
    .zd {
      background: url("~@/assets/6.png") no-repeat;
    }
    .tjfx {
      background: url("~@/assets/7.png") no-repeat;
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .datetime {
    color: fade(#67c7eb, 80%);
    font-weight: 500;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
