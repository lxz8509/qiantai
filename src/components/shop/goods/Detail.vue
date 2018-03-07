<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix" style="height:400px">

                            <!-- jq插件 -->
                            <div class="magnifier" id="magnifier1">
                                <div class="magnifier-container">
                                    <div class="images-cover"></div>
                                    <!--当前图片显示容器-->
                                    <div class="move-view"></div>
                                    <!--跟随鼠标移动的盒子-->
                                </div>
                                <div class="magnifier-assembly">
                                    <div class="magnifier-btn">
                                        <span class="magnifier-btn-left">&lt;</span>
                                        <span class="magnifier-btn-right">&gt;</span>
                                    </div>
                                    <!--按钮组-->
                                    <div class="magnifier-line">
                                        <ul class="clearfix animation03">
                                            <li v-for="item in top.imglist" :key="item.id">
                                                <div class="small-img">
                                                    <img :src="item.original_path" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!--缩略图-->
                                </div>
                                <div class="magnifier-view"></div>
                                <!--经过放大的图片显示容器-->
                            </div>

                            <!--商品图片-->
                            <div class="pic-box">

                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <div class="goods-spec" style="top:-350px" >
                                <h1>{{top.goodsinfo.title}}</h1>
                                <p class="subtitle">{{top.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{top.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{top.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em class="price" id="commoditySellPrice">¥{{top.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <el-input-number size="mini" v-model="num7"></el-input-number>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div class="btn-buy" id="buyButton">
                                                <button class="buy">立即购买</button>
                                                <button class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                            <!--/商品信息-->
                        </div>

                        <!-- tabs切换 -->
                        <el-tabs type="border-card">
                            <!-- 商品详情 -->
                            <el-tab-pane label="商品详情">
                                <div class="tab-content entry" style="display:block;">
                                    <div v-html="top.goodsinfo.content"></div>
                                </div>
                            </el-tab-pane>

                            <!--评论部分 -->
                            <el-tab-pane label="评论">
                                <!-- 评论组件 -->
                                <app-comment :id="id"></app-comment>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <app-aside :list="top.hotgoodslist"></app-aside>
            </div>
            <!--/页面左边-->

            <!--页面右边-->

            <!--/页面右边-->
        </div>
    </div>

</template>

<script>
import appAside from "./subcom/CommonAside.vue";
import appComment from "./subcom/Publiccomment";
import "../../../lib/imgzoom/css/magnifier.css";
import "../../../lib/imgzoom/js/magnifier.js";
import $ from "jquery";
export default {
  components: {
    appAside,
    appComment
  },
  data() {
    return {
      id: this.$route.params.id,
      top: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      },
      num7: 1
    };
  },
  methods: {
    getDetail() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        if (res.data.status == 0) {
          //   console.log(res.data.message);
          this.top = res.data.message;
          // console.log(this.top2);
        }
      });
    }
  },
  created() {
    this.getDetail();
  },
  mounted() {
   
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getDetail();
    },
    top(){
         var magnifierConfig = {
         magnifier: "#magnifier1", //最外层的大容器
         width: 300, //承载容器宽
         height: 300, //承载容器高
         moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
         zoom: 5 //缩放比例
    };

    setTimeout(function() {
                 var _magnifier = $().imgzoon(magnifierConfig);
             }, 500);
    }
  }
};
</script>

<style scoped>

</style>