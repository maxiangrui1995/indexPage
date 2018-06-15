<template>
  <div class="wrapper">
    <div class="content">
      <VueScrollbar class="my-scroller">
        <ul class="menu">
          <li v-for="(item,index) in childData" :key="index" :title="item.dev_name">{{item.dev_name}}</li>
        </ul>
      </VueScrollbar>
    </div>
    <div class="nav">
      <ul class="menu">
        <YNode :active="true" v-for="(item,index) in showData" :key="index" :data="item" :selected="organize_show_selected" @on-click="navMenuSelect">
          <span :title="item.name">{{item.name}}</span>
        </YNode>
      </ul>
      <div class="btn">
        <div class="prev" @click="changePage(-1)" title="上一页">
          <Icon type="chevron-left" :size="12"></Icon>
        </div>
        <div class="next" @click="changePage(1)" title="下一页">
          <Icon type="chevron-right" :size="12"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YNode from "@/components/Node";
import VueScrollbar from "vue2-scrollbar";
export default {
  components: { YNode, VueScrollbar },
  props: { data: Array, child: Array },
  data() {
    return {
      page: 1,
      rows: 3,
      showData: [],
      organize_show_selected: {},
      childData: []
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
    },
    navMenuSelect(data) {
      this.$store.commit("setOriganizeShow", data);
      this.organize_show_selected = data.o_id;
      this.$http
        .post("Ma_zong/crossingBox", {
          o_id: data.o_id
        })
        .then(res => {
          let data = res.data;
          this.childData = data.data;
          this.$store.commit("setCrossingBox", data.data);
        });
    }
  },
  watch: {
    data(value) {
      this.organize_show_selected = value[0].o_id;
      this.loadData();
    },
    child(value) {
      this.childData = value;
    }
  }
};
</script>

<style scoped lang='less'>
.my-scroller {
  width: 100%;
  height: 82px;
  background: transparent;
}
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
        height: 94px;
        float: left;
        list-style: none;
        color: #67c7eb;
        padding: 0 10px;
        text-align: center;
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
      &:after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
  .nav {
    margin-top: 20px;
    position: relative;
    .menu {
      width: 800px;
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
        border-radius: 50%;
        background: #39496a;
        vertical-align: top;
        text-align: center;
      }
      .ivu-icon {
        color: #fff;
        line-height: 30px;
      }
    }
  }
}
</style>
