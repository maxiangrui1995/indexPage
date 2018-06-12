<template>
  <div class="wrapper">
    <div class="title hightlight">故障原因</div>
    <Carousel radius-dot arrow='never' v-model="selectIndex" :style="{width:'479px',height:'615px'}" class="my-carousel">
      <!-- <CarouselItem :name="0">
        <div class="box">
          <div class="body">
            <div class="img"></div>
            <div class="info">
              <div class="item">
                中山东路
                <div class="msg">35m</div>
              </div>
              <div class="item">
                <Rate :value="5"></Rate>
                <div class="msg">40分钟</div>
              </div>
              <div class="item">
                维修状态
                <div class="msg ok">已接单</div>
              </div>
            </div>
          </div>
          <div class="footer">
            故障原因：
            <span>线路故障或供电故障</span>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem :name="1">
      </CarouselItem>
      <CarouselItem :name="2">
      </CarouselItem> -->
      <CarouselItem v-for="item in carouselItemCounts" :key="item" :name="item">
        asdasd
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
    return { selectIndex: 0, carouselItemCounts: 0 };
  },
  watch: {
    data() {
      let count = Math.ceil(this.data.length / 3);
      this.carouselItemCounts = count;
      console.log(count);
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
  .body {
    width: 100%;
    height: 110px;
    display: table;
    .img {
      display: table-cell;
      width: 180px;
      height: 110px;
    }
    .info {
      display: table-cell;
      .item {
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 1.28em;
        position: relative;
        .msg {
          position: absolute;
          top: 0;
          right: 10px;
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
    span {
      color: #ffffff;
    }
  }
}
</style>
<style>
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
