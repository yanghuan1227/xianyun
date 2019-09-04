<template>
  <div class="container">
    <el-row type="flex" class="main">
      <el-col :span="6">
        <h5>闲云旅游旅游网</h5>
        <p>上亿旅行者共同打造的"旅行神器"</p>
        <p>
          <span>600,00</span> 多个全球旅游目的地
        </p>
        <p>
          <span>600,000</span> 个细分目的地新玩法
        </p>
        <p>
          <span>760,000,000</span> 次攻略下载
        </p>
        <p>
          <span>38,000</span> 家旅游产品供应商
        </p>
      </el-col>
      <el-col :span="5">
        <h5>关于我们</h5>
        <p>隐私政策 商标声明</p>
        <p>服务协议 游记协议</p>
        <p>商城平台服务协议</p>
        <p>网络信息侵权通知指引</p>
        <p>闲云旅游旅游网服务监督员</p>
        <p>网站地图加入闲云旅游</p>
      </el-col>
      <el-col :span="5">
        <h5>旅游服务</h5>
        <p>旅游攻略 酒店预订</p>
        <p>旅游特价 国际租车</p>
        <p>旅游问答 旅游保险</p>
        <p>旅游指南 订火车票</p>
        <p>旅游资讯 APP下载</p>
      </el-col>
      <el-col :span="6">
        <img src="http://157.122.54.189:9093/images/1556522965.png" alt />
        <p style="padding-left:49px">关注我们</p>
      </el-col>
    </el-row>
    <div class="copy">
      <span></span>
      <p>京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.container {
  height: 329px;
  background: #333;
  margin-top: 500px;
  color: #ccc;
  margin: 0 auto;

  .main {
    width: 1000px;
    margin: 0 auto;
    padding-top: 30px;

    h5 {
      font-size: 16px;
      font-weight: normal;
      padding-bottom: 10px;
    }

    p {
      font-size: 12px;
      line-height: 1.8;
      span {
        color: orange;
      }
    }

    img {
      width: 140px;
      height: 140px;
    }
  }

  .copy {
    width: 1000px;
    margin: 0px auto;
    margin-top: 20px;
    height: 117px;

    span {
      height: 1px;
      width: 1000px;
      background: #ccc;
      display: block;
    }
    p{
      margin-top: 40px;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>