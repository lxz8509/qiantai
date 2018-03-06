<template>
    <div>
        <div class="section" v-for="item in groupgoods" :key="item.level1cateid">

            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>

                    <a  v-for="subitem in item.level2cateid" :key="subitem.subcateid">手机通讯</a>         
                    <a href="/goods/40.html">更多<i>+</i></a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">

                        <li v-for="subitem in item.datas" :key="subitem.artID">
                            <router-link :to="{name:'GoodsDetail',params:{id:subitem.artID}}">
                                <div class="img-box">
                                    <img :src="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{subitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{subitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{subitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{subitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>

                    

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            groupgoods:[]
        }
    },
    methods:{
        getGtoupGoods(){
            this.$http.get(this.$api.goodsContent).then(res=>{
                if(res.data.status ==0){
                    console.log(res.data.message)
                    this.groupgoods = res.data.message
                }
            })
        }
    
    },
    created(){
        this.getGtoupGoods();
    }

};
</script>

<style scoped>

</style>