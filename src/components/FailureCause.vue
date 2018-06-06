<template>
  <div class="box">
    <div class="title">故障原因</div>
    <Carousel radius-dot arrow='never' v-model="selectIndex" :style="{width:'479px',height:'615px'}" class="my-carousel">
      <CarouselItem :name="0">
        <div class="demo-carousel">
          <div class="wrapper">
            <div class="header">
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
        </div>
      </CarouselItem>
      <CarouselItem :name="1">
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem :name="2">
        <div class="demo-carousel">3</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return { selectIndex: 0 };
  }
};
</script>

<style scoped lang='less'>
.box {
  position: relative;
  height: 700px;
  &:before {
    display: block;
    content: "";
    width: 479px;
    height: 43px;
    background: url("~@/assets/3.png");
  }
  .title {
    position: absolute;
    top: 0;
    left: 35px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 1.28em;
    text-shadow: 0px 0px 15px #fff;
  }
}
.wrapper {
  .header {
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
