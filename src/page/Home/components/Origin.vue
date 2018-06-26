<template>
  <div class="wrapper">
    <div class="content">
      <Spin fix v-if="child_loading"></Spin>
      <ul class="menu">
        <li v-for="(item,index) in childData" :key="index" :title="item.dev_name" @click="navChildMenuSelect(item)">{{item.dev_name}}</li>
      </ul>
      <Page :total="child_total" size="small" show-total @on-change="childPageChange" class="indexPage" :style="{'margin':'10px 0','text-align':'right','user-select':'none'}"></Page>
    </div>
    <div class="nav">
      <ul class="menu">
        <YNode :active="true" v-for="(item,index) in showData" :key="index" :data="item" :selected="organize_show_selected" @on-click="navMenuSelect">
          <span :title="item.name">{{item.name}}</span>
        </YNode>
      </ul>
      <div class="btn">
        <div class="prev" @click="changePage(-1)" title="上一页" :class="pagePrevClassObject">
          <Icon type="chevron-left" :size="12"></Icon>
        </div>
        <div class="next" @click="changePage(1)" title="下一页" :class="pageNextClassObject">
          <Icon type="chevron-right" :size="12"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YNode from "@/components/Node";
export default {
  components: { YNode },
  props: { data: Array },
  data() {
    return {
      page: 1,
      rows: 3,
      showData: [],
      organize_show_selected: {},
      childData: [],
      child_loading: false,
      child_total: 0,
      child_page: 1
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
    childPageChange(page) {
      this.child_page = page;
      this.loadChildData(this.organize_show_selected);
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
    loadChildData(id) {
      this.child_loading = true;
      this.$http
        .post("Ma_zong/crossingBox", {
          o_id: id,
          tag: "njdh",
          page: this.child_page,
          rows: 6
        })
        .then(res => {
          let data = res.data;
          this.child_total = ~~data.data.total;
          this.childData = data.data.list || [];
          this.child_loading = false;
        });
    },
    navMenuSelect(data) {
      this.organize_show_selected = data.o_id;
      this.child_page = 1;
      this.loadChildData(data.o_id);
    },
    navChildMenuSelect(data) {
      this.$store.commit("setCrossingBox", data);
    }
  },
  computed: {
    pagePrevClassObject() {
      let total = this.data.length;
      let page = this.page;
      let rows = this.rows;
      let bool = true;
      if (page > 1) {
        bool = false;
      }
      return {
        "btn-disabled": bool
      };
    },
    pageNextClassObject() {
      let total = this.data.length;
      let page = this.page;
      let rows = this.rows;
      let bool = true;
      if (page < Math.floor(total / rows)) {
        bool = false;
      }
      return {
        "btn-disabled": bool
      };
    }
  },
  watch: {
    data(value) {
      this.navMenuSelect(value[0]);
      this.loadData();
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
    height: 150px;
    border-bottom: 1px solid #073b69;
    position: relative;
    .menu {
      padding-top: 16px;
      li {
        width: 126px;
        height: 88px;
        float: left;
        list-style: none;
        color: #67c7eb;
        margin: 0 10px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        &:before {
          display: block;
          content: "正";
          background: url("~@/assets/cpustatus.png") no-repeat;
          width: 78px;
          height: 70px;
          line-height: 56px;
          margin: 0 auto;
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
    margin-top: 12px;
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
      user-select: none;
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
      .btn-disabled {
        cursor: not-allowed;
        .ivu-icon {
          color: #b5b5b5;
        }
      }
    }
  }
}
</style>
<style>
.ivu-spin {
  background: rgba(6, 27, 68, 0.3);
}
.indexPage .ivu-page-next,
.indexPage .ivu-page-prev {
  background-color: transparent;
  color: #fff;
}
.indexPage .ivu-page-next a,
.indexPage .ivu-page-prev a {
  color: #fff;
}
.indexPage .ivu-page-item {
  background-color: transparent;
}
</style>
