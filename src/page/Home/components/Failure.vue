<template>
  <div class="wrapper">
    <div class="title hightlight">故障原因</div>
    <Carousel radius-dot arrow='never' v-model="selectIndex" :style="{width:'479px',height:'615px'}" class="my-carousel">
      <CarouselItem v-for="item in carouselItemCounts" :key="item" :name="item">
        <div class="box" v-for="item2 in carouselItemArray[item]" :key="item2">
          <div class="body">
            <div class="img">
              <!--  {{data[3*(item-1)+item2-1].fault_img_url}} -->
              <img :src="'http://127.0.0.1/znyw3.0/PHP/public'+data[3*(item-1)+item2-1].fault_img_url" alt="路口图片">
            </div>
            <div class="info">
              <div class="item">
                {{data[3*(item-1)+item2-1].crossing_name}}
                <div class="msg"></div>
              </div>
              <div class="item">
                告警等级
                <div class="msg">{{data[3*(item-1)+item2-1].level}}</div>
              </div>
              <div class="item">
                派发状态
                <div class="msg ok">{{dispatch[data[3*(item-1)+item2-1].is_dispatch]}}</div>
              </div>
            </div>
          </div>
          <div class="footer">
            故障原因：
            <span>{{data[3*(item-1)+item2-1].memo}}</span>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      // 当前选中的下标
      selectIndex: 0,
      // 走马灯个数
      carouselItemCounts: 0,
      // 走马灯里面的item个数
      carouselItemArray: {},
      // 派发状态
      dispatch: {
        "0": "未派发",
        "1": "已手动派发",
        "2": "已自动派发"
      }
    };
  },
  mounted() {},
  computed: {
    msgFailure() {
      return this.$store.state.msgFailure;
    }
  },
  watch: {
    data(data) {
      let count = Math.ceil(data.length / 3);
      this.carouselItemCounts = count;
      for (let i = 0; i < count; i++) {
        this.carouselItemArray[i + 1] =
          data.length - 3 * i > 3 ? 3 : data.length - 3 * i;
      }
    },
    msgFailure(value) {
      this.data.unshift(value);
      if (this.data.length > 9) {
        this.data.pop();
      }
    }
  }
};
</script>

<style scoped lang='less'>
.wrapper {
  position: relative;
  height: 700px;
  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 43px;
    background: url("~@/assets/3.png");
  }
  .title {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 35px;
  }
}
.box {
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
      padding-left: 10px;
      .item {
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 1.28em;
        position: relative;
        .msg {
          position: absolute;
          top: 0;
          right: 20px;
          color: #898c96;
        }
        .ok {
          color: #67c7eb;
        }
      }
    }
  }
  .footer {
    color: #898c96;
    font-size: 1.28em;
    margin-top: 10px;
    span {
      color: #ffffff;
    }
  }
}
</style>
<style>
.ivu-carousel-item > .box:last-child {
  border: none;
}
.my-carousel .ivu-carousel-dots li button.radius {
  width: 14px;
  height: 14px;
  margin: 0 16px;
  background: transparent;
  border: 2px solid #67c7eb;
}
.my-carousel .ivu-carousel-dots li.ivu-carousel-active > button.radius {
  background: #67c7eb;
}
.my-carousel .ivu-carousel-dots {
  height: 40px;
  background: url("~@/assets/lighthight.png") right;
}
.my-carousel .ivu-carousel-dots li {
  padding: 12px 0;
}
</style>
