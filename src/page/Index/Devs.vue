<template>
  <transition name="fade">
    <div class="box" v-if="show">
      <div class="box-header hightlight">设备监视</div>
      <div class="box-body">
        <div class="table">
          <div class="table-header">
            <div class="tr">
              <div class="td">设备</div>
              <div class="td">统计</div>
            </div>
          </div>
          <div class="table-body">
            <div v-for="(item,index) in data" :key="index">
              <transition name="fade-side">
                <div class="tr" :class="'bg'+item.category_num" v-if="index<=1?itemShow:true">
                  <div class="td">{{item.name}}</div>
                  <div class="td">{{item.count}}</div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      data: [],
      itemShow: true
    };
  },
  methods: {},
  created() {
    setTimeout(() => {
      this.show = true;
      this.data = [
        {
          category_num: "1",
          name: "name1",
          count: "200"
        },
        {
          category_num: "2",
          name: "name2",
          count: "200"
        },
        {
          category_num: "3",
          name: "name3",
          count: "200"
        },
        {
          category_num: "4",
          name: "name4",
          count: "200"
        },
        {
          category_num: "5",
          name: "name5",
          count: "200"
        }
      ];
    }, 150);
  },
  watch: {
    data(data) {
      setTimeout(() => {
        this.itemShow = false;
        setTimeout(() => {
          this.itemShow = true;
          data.push(data[0]);
          data.shift();
        }, 1200);
      }, 5000);
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 36px;
  &-header {
    width: 342px;
    height: 45px;
    line-height: 45px;
    background: url("~@/assets/title-header.png");
    margin: 0 auto;
    text-align: center;
  }
  &-body {
    padding: 0 30px;
  }
}
.table {
  padding-left: 50px;
  overflow: hidden;
  .tr {
    display: table;
  }
  .td {
    display: table-cell;
    color: #cacaca;
    height: 38px;
    line-height: 38px;
  }
  .td:nth-child(1) {
    width: 200px;
    text-indent: 8px;
  }
  .td:nth-child(2) {
    width: 160px;
    text-align: right;
    padding-right: 40px;
  }
  &-body {
    height: 100px;
    .tr {
      background: linear-gradient(to right, #1259c4, rgba(20, 64, 156, 0.2));
      border-left: 4px solid #fedb4b;
      height: 34px;
      line-height: 34px;
      position: relative;
      margin-bottom: 16px;
      &:before {
        display: block;
        content: "";
        width: 44px;
        height: 44px;
        position: absolute;
        left: -48px;
        top: -3px;
      }
    }
    .td:nth-child(1) {
      color: #8fd4f5;
    }
    .td:nth-child(2) {
      color: #36a5ff;
    }
  }
  //视频设备
  .bg1:before {
    background: url("~@/assets/dev02.png") no-repeat;
  }
  // 服务器
  .bg2:before {
    background: url("~@/assets/dev01.png") no-repeat;
  }
  // 动环设备
  .bg3:before {
    background: url("~@/assets/dev03.png") no-repeat;
  }
  // 机箱设备
  .bg4:before {
    background: url("~@/assets/dev04.png") no-repeat;
  }
  // 网络设备
  .bg5:before {
    background: url("~@/assets/dev05.png") no-repeat;
  }
}
.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

.fade-side-enter-active {
  transform: translateY(0);
  transition: all 1.2s ease;
}
.fade-side-leave-active {
  transition: all 1.2s ease;
}
.fade-side-enter {
  transform: translateY(38px);
  opacity: 0;
}
.fade-side-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}
</style>
