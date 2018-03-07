<template>
    <div>
        <!-- 面包屑 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>

        <div class="section">
            <!-- 页面上部分 -->
            <div class="wrapper">
                <!-- 左侧分类 -->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->
                            <li v-for="item in top.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item. title}}</span>
                                    <p>
                                        <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}&nbsp;</span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <a href="/goods/40.html">{{item. title}}</a>
                                        </dt>
                                        <dd>
                                             <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</router-link>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/左侧分类-->

                <!--轮播图-->
                <div class="left-705">
                    <div class="banner-img">
                            <el-carousel height="350px">
                                <el-carousel-item v-for="item in top.sliderlist" :key="item.id">
                                    <img style="height:100%" :src="item.img_url" alt="">
                                </el-carousel-item>
                            </el-carousel>

                     

                    </div>
                </div>
                <!--/轮播图-->

                <!--下边商品列表-->
                <app-aside :list="top.toplist"></app-aside>

                <!--/下边商品列表-->
            </div>
        </div>

        <!-- 页面下部分 -->
        <app-main></app-main>
    </div>

</template>

<script>
import appAside from "./subcom/CommonAside.vue";
import appMain from "./subcom/ListMain.vue";
export default {
  components: {
    appAside,
    appMain
  },
  data() {
    return {
      top: [
        {
          catelist: [],
          sliderlist: [],
          toplist: []
        }
      ]
    };
  },
  methods: {
    getGoodList() {
      this.$http.get(this.$api.goodsTop).then(res => {
        //   console.log(res.data.message)
        if (res.data.status == 0) {
          this.top = res.data.message;
        }
      });
    }
  },
  created() {
    this.getGoodList();
  }
};
</script>

<style scoped>

</style>