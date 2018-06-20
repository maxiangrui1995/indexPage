<template>
  <div class="wrapper">
    <div class="title hightlight">视频通道</div>
    <div class="selectbox" v-if="videoData.length>0?true:false">
      <Dropdown @on-click="dropDownItemSelect">
        <a href="javascript:void(0)">
          {{videoDataSelected.dev_name}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item,index) in videoData" :key="index" :name="item.dev_name">{{item.dev_name}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="box">
      <div class="header" :title="videoDataSelected.address">
        <object v-if="videoData.length>0?true:false" type='application/x-vlc-plugin' pluginspage="http://www.videolan.org/" id='vlc' events='false' width="424" height="253">
          <!--  <param name='mrl' value='rtsp://admin:admin123456@192.168.0.198' />
          <param name='volume' value='50' />
          <param name='autoplay' value='true' />
          <param name='loop' value='false' />
          <param name='fullscreen' value='false' /> -->
          <param name='mrl' :value='videoDataSelected.address' />
        </object>
      </div>
      <div class="body" v-if="videoData.length>0?true:false">
        <div class="item">
          <YNode>
            <span :title="videoDataSelected.name">{{videoDataSelected.name}}</span>
          </YNode>
        </div>
        <div class="item">
          <div class="info">设备厂家：{{videoDataSelected.sdk}}</div>
          <div class="info">生命周期：{{videoDataSelected.valid_time}}年</div>
          <div class="info">品牌型号：{{videoDataSelected.brand}}-{{data.model}}</div>
          <div class="info">建设单位：{{videoDataSelected.build_company || '-'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YNode from "@/components/Node";

export default {
  components: { YNode },
  props: {
    data: Object
  },
  data() {
    return {
      videoData: [],
      videoDataSelected: {}
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
    loadData(dev_code) {
      this.$http
        .post("Ma_zong/playVideo", {
          dev_code: dev_code,
          tag: "njdh"
        })
        .then(res => {
          let data = res.data;
          this.videoData = data.data;
          this.videoDataSelected = data.data[0] || {};
          console.log(this.videoData);
        });
    }
  },
  computed: {
    crossing_box(value) {
      return this.$store.state.crossing_box_selected;
    }
  },
  watch: {
    crossing_box(value) {
      this.loadData(value.dev_code);
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
  > .title {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 110px;
  }
  > .selectbox {
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
  > .box {
    width: 430px;
    height: 335px;
    position: absolute;
    top: 40px;
    left: 23px;
    .header {
      width: 430px;
      height: 260px;
      background: url("~@/assets/video.png");
      padding: 3px;
    }
    .body {
      display: table;
      width: 430px;
      height: 75px;
      .item {
        display: table-cell;
        position: relative;
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
