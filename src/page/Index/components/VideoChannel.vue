<template>
  <div class="box">
    <p class="box-info hightlight">视频通道</p>
    <div class="selectbox" style="z-index:2;" v-if="videoData.length>0">
      <Dropdown @on-click="dropDownItemSelect" placement="right-start">
        <a href="javascript:void(0)">
          {{videoDataSelected.dev_name}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item,index) in videoData" :key="index" :name="item.dev_name">{{item.dev_name}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="box-content">
      <div class="box-content-title" style="z-index:1;">
        <object v-if="vlcShow" type='application/x-vlc-plugin' pluginspage="http://www.videolan.org/" id='vlc' events='false' width="424" height="253" :style="{width:vlcWidth+'px'}">
          <!--  <param name='mrl' value='rtsp://admin:admin123456@192.168.0.198' />
          <param name='volume' value='50' />
          <param name='autoplay' value='true' />
          <param name='loop' value='false' />
          <param name='fullscreen' value='false' /> -->
          <!--  <param name="wmode" value="transparent">
          <param name='wmode' value='Opaque'> -->
          <param name='mrl' :value='videoDataSelected.address' />
        </object>
      </div>
      <div v-if="!videoData.length" class="tip">暂未数据</div>
      <Row class="box-content-body" v-if="videoData.length">
        <i-col span="8" class="box-content-body-inner-left">
          <div class="origin-item" :title="videoDataSelected.name">{{videoDataSelected.name}}</div>
        </i-col>
        <i-col span="16" class="box-content-body-inner-right">
          <div class="box-content-body-inner-item" :title="videoDataSelected.sdk">设备厂家：{{videoDataSelected.sdk}}</div>
          <div class="box-content-body-inner-item" :title="videoDataSelected.valid_time||0">生命周期：{{videoDataSelected.valid_time || '0'}}年</div>
          <div class="box-content-body-inner-item" :title="videoDataSelected.brand+'-'+videoDataSelected.model">品牌型号：{{videoDataSelected.brand}}-{{videoDataSelected.model}}</div>
          <div class="box-content-body-inner-item" :title="videoDataSelected.build_company||'无'">建设单位：{{videoDataSelected.build_company || '无'}}</div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoData: [],
      videoDataSelected: {},
      vlcShow: false,
      vlcWidth: 424
    };
  },
  methods: {
    dropDownItemSelect(name) {
      let b = false;
      let d = {};
      this.videoData.forEach(item => {
        if (item.dev_name == name) {
          d = item;
          b = true;
        }
      });
      this.vlcShow = false;
      this.videoDataSelected = d;
      if (b) {
        setTimeout(() => {
          this.vlcShow = true;
          this.vlcWidth = 425;
          setTimeout(() => {
            this.vlcShow = true;
            this.vlcWidth = 424;
          }, 300);
        }, 100);
      }
    },
    loadData(dev_code) {
      this.$http("Ma_zong/playVideo", {
        dev_code: dev_code
      }).then(res => {
        let data = res.data;
        this.videoData = data;
        let d = data[0] || {};
        this.dropDownItemSelect(d.dev_name);
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
.box {
  position: relative;
  background: url("~@/assets/2.png") no-repeat;
  width: 100%;
  height: 390px;
  .selectbox {
    position: absolute;
    right: 24px;
    top: 10px;
    a {
      color: #d0ab54;
      &:hover {
        color: fade(#d0ab54, 80%);
      }
    }
  }
  .tip {
    height: 60px;
    line-height: 60px;
    font-size: 1.14em;
  }
  &-info {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 110px;
  }
  &-content {
    width: 430px;
    height: 320px;
    position: absolute;
    top: 46px;
    left: 30px;
    &-title {
      width: 100%;
      height: 260px;
      background: url("~@/assets/video.png");
      padding: 3px;
    }
    &-body {
      width: 100%;
      height: 60px;
      &-inner-left {
        position: relative;
        top: 25px;
        left: 5px;
      }
      &-inner-right {
        padding-top: 8px;
        padding-left: 10px;
      }
      &-inner-item {
        width: 50%;
        float: left;
        height: 30px;
        line-height: 30px;
        color: #cacaca;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>