<template>
    <div class="app">
         <div class="header-box">
            <header-bar></header-bar>   
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import HeaderBar from 'components/HeaderBar';
export default {
    name: 'App',
    components: {
        HeaderBar
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="less">
.app {
    .header-box {
        width: 100%;
        height: 70px;
        background: #409EFF;
    }
}
</style>