<template>
  <div class="wrapper">
    <div class="content">
      <ul class="menu">
        <li>中山北路路口节点01</li>
        <li>中山北路路口节点01</li>
        <li>中山北路路口节点01</li>
        <li>中山北路路口节点01</li>
        <li>中山北路路口节点01</li>
      </ul>
    </div>
    <div class="nav">
      <ul class="menu">
        <li v-for="(item,index) in showData" :key="index" class="node" :title="item.name">{{item.name}}</li>
      </ul>
      <div class="btn">
        <div class="prev" @click="changePage(-1)"></div>
        <div class="next" @click="changePage(1)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Array },
  data() {
    return {
      page: 1,
      rows: 3,
      showData: []
    };
  },
  methods: {
    changePage(page) {
      let p = this.page;
      this.page =
        p + page <= 0
          ? 1
          : (p + page) * this.rows >= this.data.length
            ? Math.ceil(this.data.length / this.rows)
            : p + page;
      this.loadData();
    },
    loadData() {
      this.showData = [];
      this.data.forEach((item, index) => {
        if (
          index >= (this.page - 1) * this.rows &&
          index < this.page * this.rows
        ) {
          this.showData.push(item);
        }
      });
    }
  },
  watch: {
    data() {
      this.loadData();
    }
  }
};
</script>

<style scoped lang='less'>
.wrapper {
  width: 922px;
  height: 204px;
  background: url("~@/assets/footerbg.png");
  margin: 26px auto 0;
  padding: 0 20px;
  .content {
    height: 134px;
    border-bottom: 1px solid #073b69;
    padding-top: 26px;
    .menu {
      li {
        float: left;
        list-style: none;
        color: #67c7eb;
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
    }
  }
  .nav {
    margin-top: 20px;
    position: relative;
    .menu {
      width: 800px;
      height: 30px;
      overflow: hidden;
      li {
        float: left;
        list-style: none;
        margin-right: 15px;
        cursor: pointer;
      }
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0;
      .prev,
      .next {
        display: inline-block;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .prev {
        background: url("~@/assets/leftbtn.png");
        margin-right: 9px;
      }
      .next {
        background: url("~@/assets/rightbtn.png");
      }
    }
  }
}
</style>
