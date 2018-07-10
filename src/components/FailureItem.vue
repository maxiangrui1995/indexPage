<template>
  <div class="wrapper">
    <div class="body">
      <!-- <div class="img">
        <img :src="'../../PHP/public'+data.fault_img_url" :onerror="defaultImg" alt="路口图片">
      </div> -->
      <div class="info">
        <div class="item">
          {{data.crossing_name}}
          <div class="msg"></div>
        </div>
        <div class="item">
          告警等级
          <div class="msg" :class="levelClass">
          </div>
        </div>
        <div class="item">
          故障时间
          <div class="msg ok time">{{data.create_time}}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      故障原因：
      <span>{{data.memo}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "failureChild",
  data() {
    return {
      // 派发状态
      dispatch: {
        "0": "未派发",
        "1": "已手动派发",
        "2": "已自动派发"
      },
      defaultImg: 'this.src="' + require("../assets/imgerror.png") + '"'
    };
  },
  created() {},
  computed: {
    levelClass() {
      let obj = {};
      obj[["g0", "g1", "g2", "g3", "g4", "g5"][this.data.level]] = true;
      return obj;
    }
  }
};
</script>

<style scoped lang='less'>
.wrapper {
  padding: 20px 0 14px 0;
  border-bottom: 2px solid fade(#6b6767, 20%);
  .body {
    width: 100%;
    height: 110px;
    display: table;
    .img {
      display: table-cell;
      width: 180px;
      vertical-align: top;
      background: rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
      img {
        width: 180px;
        position: absolute;
        left: 0;
      }
    }
    .info {
      display: table-cell;
      text-indent: 10px;
      .item {
        height: 36px;
        line-height: 36px;
        color: #f1f1f1;
        position: relative;
        font-size: 1.08em;
        .msg {
          position: absolute;
          top: 7px;
          right: 20px;
        }
        .time {
          top: 0px;
        }
        .ok {
          color: #67c7eb;
        }
      }
      .item:first-child {
        font-size: 1.28em;
        color: #fff;
      }
    }
  }
  .footer {
    color: #898c96;
    font-size: 1.08em;
    margin-top: 10px;
    text-indent: 10px;
    span {
      color: #ffffff;
    }
  }
}
.g0 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g0.png");
}
.g1 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g1.png");
}
.g2 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g2.png");
}
.g3 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g3.png");
}
.g4 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g4.png");
}
.g5 {
  width: 72px;
  height: 22px;
  background: url("~@/assets/g5.png");
}
</style>

