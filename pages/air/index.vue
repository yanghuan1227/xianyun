<template>
  <div class="container">
    <h3>
      <span class="iconfont iconfeiji"></span>
      <i>国内机票</i>
    </h3>

    <el-row type="flex" justify="space-between">
      <SearchForm></SearchForm>
      <div class="sale-banner">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" />
      </div>
    </el-row>

    <el-row type="flex" class="statement">
      <el-col :span="8">
        <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF;"></i>
        <span>100%航协认证</span>
      </el-col>
      <el-col :span="8">
        <i class="iconfont iconbaozheng" style="color:green;"></i>
        <span>出行保证</span>
      </el-col>
      <el-col :span="8">
        <i class="iconfont icondianhua" style="color:#409EFF;"></i>
        <span>7x24小时服务</span>
      </el-col>
    </el-row>

    <h2>
      <span class="iconfont icontejiajipiao"></span>
      <i>特价机票</i>
    </h2>

    <div class="air-plane">
      <el-row type="flex" class="air-sale-pic" justify="space-between">
        <!-- sales 后台返回的数据 -->
        <el-col :span="6" v-for="(item,index) in sales" :key="index">
          <nuxt-link
            :to="`/air/flights?departCity=${item.departCity}&departCode=
						${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`"
          >
            <!-- 封面图片 -->
            <img :src="item.cover">
            <!-- 航班信息 -->
              <el-row type="flex" justify="space-between" class="layer-bar">
                    <span>{{item.departCity}} -{{item.destCity}}</span>
                    <span>￥{{item.price}}</span>
              </el-row>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/air/searchForm";
export default {
  data() {
    return {
      sales:[]  //特价机票的数组
    };
  },
  components: {
    SearchForm
  },
  mounted () {
    this.$axios({
      url:'/airs/sale'
    }).then(res=>{
      // 特价机票的列表
      const {data} = res.data
      this.sales = data
    })
  }
};
</script>

<style scoped lang='less'>
.container {
  width: 1000px;
  margin: 0 auto;

  h3 {
    color: orange;
    font-size: 20px;
    padding: 10px;
    i {
      font-weight: normal;
    }
  }

  .statement {
    margin: 15px 0;
    border: 1px #ddd solid;
    background: #f5f5f5;
    height: 58px;
    padding: 10px 0;
    box-sizing: border-box;

    > div {
      text-align: center;
      line-height: 38px;
      border-right: 1px #ddd solid;

      &:last-child {
        border-right: none;
      }

      * {
        vertical-align: middle;
      }

      i {
        font-size: 30px;
      }
    }
  }

  h2 {
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: #409eff;

    span {
      font-size: 20px;
    }
  }
}
</style>