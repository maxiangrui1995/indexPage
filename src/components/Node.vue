<template>
    <div class="box" @click="onClick" :class="{'active':isActive}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: ["active", "data", "selected"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onClick() {
      this.$emit("on-click", this.data);
    }
  },
  created() {
    if (this.data && this.data.o_id === this.selected) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
  watch: {
    data(value) {
      if (value.o_id === this.selected) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    selected(value) {
      if (this.data.o_id === value) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  display: inline-block;
  margin-right: 20px;
  width: 123px;
  height: 30px;
  line-height: 30px;
  background: url("~@/assets/1.png") no-repeat;
  color: #67c7eb;
  padding: 0 20px 0 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.box.active {
  background: url("~@/assets/1-active.png") no-repeat;
  color: #fff;
}
</style>
