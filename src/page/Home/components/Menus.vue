<template>
  <div class="wrapper">
    <ul class="menu">
      <!-- <li class="active">首页</li>
            <li class="zcgl">资产管理</li>
            <li class="sjksh">数据可视化</li>
            <li class="zd">诊断</li>
            <li class="tjfx">统计分析</li> -->
      <li class="active">
        <a href="">首页</a>
      </li>
      <li v-for="(item,index) in menuList" :key="index" :class="item.class">
        <a href="#" @click="linkTo(item)">{{item.name}}</a>
      </li>
    </ul>
    <div class="datetime">{{dateTime}}</div>
  </div>
</template>

<script>
export default {
  data() {
    let base = "../../PHP/public/index.php/index/index/index.html";
    return {
      dateTime: "",
      menuList: [
        {
          name: "资产管理",
          class: "zcgl"
        },
        {
          name: "数据可视化",
          class: "sjksh"
        },
        { name: "诊断", class: "zd" },
        {
          url: encodeURI(`${base}?q=统计分析`),
          name: "统计分析",
          class: "tjfx"
        }
      ]
    };
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
    },
    linkTo(data) {
      sessionStorage.setItem("jk_url", data.name);
      window.location.href =
        "../../PHP/public/index.php/index/index/index.html";
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
      a {
        color: inherit;
      }
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
