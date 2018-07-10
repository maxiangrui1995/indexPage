<template>
  <div class="box">
    <ul class="menu">
      <li class="active">首页</li>
      <li v-for="(item,index) in menuList" :key="index" :class="item.class" @click="linkTo(item)">
        {{item.name}}
      </li>
    </ul>
    <div class="datetime">{{dateTime}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: "",
      menuList: [
        {
          name: "资产管理",
          class: "zcgl",
          title: "资产管理"
        },
        {
          name: "数据可视化",
          class: "sjksh",
          title: "数据可视化"
        },
        {
          name: "诊断",
          class: "zd",
          title: "综合诊断"
        },
        {
          name: "统计分析",
          class: "tjfx",
          title: "统计分析"
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
      sessionStorage.setItem("jk_url", data.title);
      window.location.href = indexURL;
    }
  },
  created() {
    this.refreshDateTime();
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 960px;
  height: 57px;
  background: url("~@/assets/menuline.png");
  position: relative;
  margin: 20px 0;
  .datetime {
    color: fade(#67c7eb, 80%);
    font-weight: 500;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
  }
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
      margin-left: 20px;
      cursor: pointer;
    }
    li:not(:first-child) {
      padding-left: 55px;
      &:hover {
        color: fade(#67c7eb, 80%);
      }
    }
    li.active {
      color: #fff;
    }
    li.zcgl {
      background: url("~@/assets/8.png") no-repeat;
    }
    li.sjksh {
      background: url("~@/assets/5.png") no-repeat;
    }
    li.zd {
      background: url("~@/assets/6.png") no-repeat;
    }
    li.tjfx {
      background: url("~@/assets/7.png") no-repeat;
    }
  }
}
</style>
