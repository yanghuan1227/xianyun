<template>
  <div class="box" style="padding:50px">
    <span
      v-for="(item,index) in ['新闻','体育','娱乐']"
      :key="index"
      @click="handleClick(index)"
      :class="{active:current===index}"
      style="margin-left:20px"
    >{{item}}</span>

    <ul v-show="current===0">
      <li>中秋将至</li>
      <li>中秋将至</li>
      <li>中秋将至</li>
    </ul>

    <ul v-show="current===1">
      <li>世界杯</li>
      <li>世界杯</li>
      <li>世界杯</li>
    </ul>

    <ul v-show="current===2">
      <li>迪丽热巴</li>
      <li>迪丽热巴</li>
      <li>迪丽热巴</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 记录当前的状态
      current: 0
    };
  },
  methods: {
    handleClick(index) {
      // 修改current
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: red;
}

ul{
  margin: 20px;
}
</style>