<template>
  <div class="box">
    <div class="title hightlight">故障原因</div>
    <div v-if="!carouselItemCounts" class="tip">暂无数据</div>
    <Carousel radius-dot arrow='never' v-model="selectIndex" :style="{width:'479px',height:'615px'}" class="my-carousel">
      <CarouselItem v-for="item in carouselItemCounts" :key="item" :name="item">
        <YFailure v-for="item2 in carouselItemArray[item]" :key="item2" :data="data[3*(item-1)+item2-1]" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import YFailure from "@/components/FailureItem";
export default {
  components: {
    YFailure
  },
  props: {
    data: Array
  },
  name: "failure",
  data() {
    return {
      // 当前选中的下标
      selectIndex: 0,
      // 走马灯个数
      carouselItemCounts: 0,
      // 走马灯里面的item个数
      carouselItemArray: {}
    };
  },
  created() {},
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
.box {
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
  .tip {
    font-size: 1.28em;
  }
}
</style>
<style>
.ivu-carousel-item > .wrapper:last-child {
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
  width: 14px;
}
.my-carousel .ivu-carousel-dots {
  height: 40px;
  background: url("~@/assets/lighthight.png") right;
}
.my-carousel .ivu-carousel-dots li {
  padding: 12px 0;
}
</style>
