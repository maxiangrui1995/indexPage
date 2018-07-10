<template>
  <div class="box">
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
          <div v-if="items.length>0">
            <transition-group name="list" tag="div">
              <div v-for="(item) in items" v-bind:key="item.category_num" class="list-item">
                <div :class="'bg'+item.category_num" class="tr">
                  <div class="td">{{item.name}}</div>
                  <div class="td">{{item.count}}</div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      items: []
    };
  },
  methods: {},
  created() {
    setInterval(() => {
      if (this.items.length > 0) {
        let d = this.items[0];
        this.items.splice(0, 1);
        this.items.push(d);
      }
    }, 5000);
  },
  watch: {
    data(data) {
      if (this.items.length) {
        data.forEach(item => {
          this.items.forEach(item2 => {
            item2.category_num = item2.category_num || {};
            item.category_num = item.category_num || {};
            if (item2.category_num == item.category_num) {
              item2.count = item.count;
            }
          });
        });
      } else {
        this.items = data;
      }
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
    background: url("~@/assets/4.png");
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

.list-item {
  display: block;
  margin-right: 10px;
  position: relative;
  color: #ddd;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: 1s;
}
.list-leave-active {
  position: absolute;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>