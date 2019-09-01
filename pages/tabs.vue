<template>
  <div style="padding:50px;margin-bottom:20px">
    <div class="tabs">
      <span
        v-for="(item, index) in ['新闻','体育','娱乐']"
        @click="handleClick(index)"
        :key="index"
        :class="{active:current === index}"
      >{{item}}</span>

      <ul v-show="current === 0">
        <li>中秋将至</li>
        <li>中秋将至</li>
        <li>中秋将至</li>
      </ul>

      <ul v-show="current === 1">
        <li>世界杯</li>
        <li>世界杯</li>
        <li>世界杯</li>
      </ul>

      <ul v-show="current === 2">
        <li>迪丽热巴</li>
        <li>迪丽热巴</li>
        <li>迪丽热巴</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
      handleClick(index){
        //   修改current
        this.current = index
      }
  }
};
</script>

<style lang='less' scoped>
.tabs{
    margin-bottom: 20px;
    span{
        cursor: pointer;
        padding: 10px;

    }
}
.active {
  color: red;
}
</style>