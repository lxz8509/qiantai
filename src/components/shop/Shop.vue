<template>
    <div>
        <!-- 公共头部 -->
        <app-header></app-header>
        <!-- 变化主体 -->
        <app-footer></app-footer>
        <router-view></router-view>
    </div>
</template>

<script>
    import appHeader from './subcom/Header.vue';
    import appFooter from './subcom/Footer.vue'
    export default {
        components: {
            appHeader,
            appFooter
        }
    }
</script>

<style scoped lang="less">
.footer {
    margin-top: 1px;
    background: #333;
}
</style>