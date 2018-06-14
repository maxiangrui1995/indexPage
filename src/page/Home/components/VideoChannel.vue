<template>
  <div class="wrapper">
    <div class="title hightlight">视频通道</div>
    <div class="selectbox">
      <Dropdown @on-click="dropDownItemSelect">
        <a href="javascript:void(0)">
          {{dropMenuSelected.dev_name}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item,index) in crossing_box" :key="index" :name="item.dev_name">{{item.dev_name}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="box">
      <div class="header"></div>
      <div class="body">
        <div class="item">
          <div class="node">{{organize_show.name}}</div>
        </div>
        <div class="item">
          <div class="info">设备厂家：{{devData.sdk}}</div>
          <div class="info">生命周期：{{devData.valid_time}}年</div>
          <div class="info">品牌型号：{{devData.brand}}-{{devData.model}}</div>
          <div class="info">建设单位：{{devData.build_company}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      dropMenuSelected: {},
      devData: {}
    };
  },
  methods: {
    dropDownItemSelect(name) {
      this.crossing_box.forEach(item => {
        if (item.dev_name === name) {
          console.log(item);

          this.dropMenuSelected = item;
          this.loadData();
        }
      });
    },
    loadData() {
      this.$http
        .post("Ma_zong/playVideo", {
          dev_code: this.dropMenuSelected.dev_code
        })
        .then(res => {
          let data = res.data;
          this.devData = data.data;
        });
    }
  },
  computed: {
    organize_show(value) {
      return this.$store.state.organize_show_selected;
    },
    crossing_box(value) {
      return this.$store.state.crossing_box_selected;
    }
  },
  watch: {
    organize_show(value) {},
    crossing_box(value) {
      this.dropMenuSelected = value[0];
      this.loadData();
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 470px;
  height: 390px;
  background: url("~@/assets/2.png");
  position: relative;
  .title {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 110px;
  }
  .selectbox {
    position: absolute;
    left: 235px;
    top: 10px;
    a {
      color: #d0ab54;
      &:hover {
        color: fade(#d0ab54, 80%);
      }
    }
  }
  .box {
    width: 430px;
    height: 335px;
    position: absolute;
    top: 40px;
    left: 23px;
    .header {
      width: 430px;
      height: 260px;
      background: url("~@/assets/video.png");
    }
    .body {
      display: table;
      width: 430px;
      height: 75px;
      .item {
        display: table-cell;
      }
      .item:nth-child(1) {
        width: 150px;
        vertical-align: middle;
        padding-left: 6px;
      }
      .item:nth-child(2) {
        .info {
          display: inline-block;
          width: 135px;
          height: 30px;
          line-height: 30px;
          color: #cacaca;
          font-size: 14px;
          padding-top: 5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
