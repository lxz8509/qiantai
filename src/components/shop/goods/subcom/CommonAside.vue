<template>
        <div class="left-220">
                <ul class="side-img-list">                
                    <li v-for="(item,i) in list" :key="item.id">
                        <div class="img-box">
                            <label>{{i+1}}</label>
                            <img :src="item.img_url">
                        </div>
                        <div class="txt-box">
                            <router-link :to="{name: 'goodsDetail', params: {id: item.id}}">{{item.title}}</router-link>
                            <span>{{item.add_time|data}}</span>
                        </div>
                    </li>
                 
                 
                </ul>
            </div>
</template>

<script>
    export default {
        props:['list'],
        filters:{
            data(tmpData){
                let data = new Date(tmpData)
                return `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
            }
        }

    }
</script>

<style scoped>

</style>