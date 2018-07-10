<template>
  <div class="box">
    <div class="box-header">
      <div class="box-header-inner">
        <Row :gutter="16" class="box-header-inner-nav">
          <i-col span="4" v-for="(item,index) in childData" :key="index">
            <div class="nav-item" :title="item.dev_name" @click="navChildMenuSelect(item)">{{item.dev_name}}</div>
          </i-col>
        </Row>
        <Spin fix v-if="child_loading"></Spin>
        <div class="tip" v-if="child_total==0">暂无数据</div>
        <Page :total="child_total" size="small" show-total @on-change="childPageChange" class="demo-page" v-if="child_total>0" :style="{'margin':'10px 0','text-align':'right','user-select':'none'}"></Page>
      </div>
    </div>
    <div class="box-content">
      <Row>
        <i-col span="22">
          <div class="origin-item" v-for="(item,index) in showData" :key="index" :class="{'origin-item-active':organize_show_selected==item.o_id}" :title="item.name" @click="navMenuSelect(item)">{{item.name}}</div>
        </i-col>
        <i-col span="2">
          <em class="prev" title="上一页" :class="pagePrevClassObject" @click="changePage(-1)">
            <Icon type="chevron-left" :size="12"></Icon>
          </em>
          <em class="next" title="下一页" :class="pageNextClassObject" @click="changePage(1)">
            <Icon type="chevron-right" :size="12"></Icon>
          </em>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Array },
  data() {
    return {
      page: 1,
      rows: 5,
      showData: [],
      organize_show_selected: null,
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
      this.$http("Ma_zong/crossingBox", {
        o_id: id,
        page: this.child_page,
        rows: 6
      }).then(res => {
        let data = res.data;
        this.child_total = ~~data.total;
        this.childData = data.list || [];
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

      if (page < Math.ceil(total / rows)) {
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
.box {
  width: 922px;
  height: 204px;
  background: url("~@/assets/footerbg.png");
  margin: 26px auto 0;
  &-header {
    height: 150px;
    border-bottom: 1px solid #073b69;
    position: relative;
  }
  .tip {
    font-size: 1.14em;
  }
  &-header-inner {
    margin: 0 20px;
    &-nav {
      padding-top: 14px;
    }
    .nav-item {
      color: #67c7eb;
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
        height: 65px;
        line-height: 56px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.28em;
      }
    }
  }
  &-content {
    padding: 12px 20px 0;
    .origin-item {
      margin-right: 20px;
    }
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
</style>
<style>
.ivu-spin-fix {
  background-color: rgba(42, 68, 119, 0.3) !important;
}
.demo-page .ivu-page-next,
.demo-page .ivu-page-prev {
  background-color: transparent;
  color: #fff;
}
.demo-page .ivu-page-next a,
.demo-page .ivu-page-prev a {
  color: #fff;
}
.demo-page .ivu-page-item {
  background-color: transparent;
}
</style>
