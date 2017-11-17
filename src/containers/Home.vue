/*
 * @Author: xiangmin 
 * @File: vue练习入口文件 
 * @Date: 2017-11-03 10:54:43 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-11-03 18:04:11
 */
<template>
    <div class="home">
        <el-container>
            <el-aside width="201px">
                <nav-bar></nav-bar>
            </el-aside>
            <el-main>
                <router-view />    
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
    name: 'Home',
    components: {
        NavBar,
    },
}
</script>

<style scoped lang="less">
.home {
    .el-aside {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 75px;
        border-right: solid 1px #e6e6e6;
    }
    .el-main {
        position: absolute;
        left: 201px;
        bottom: 0;
        top: 75px;
        right: 0;
    }
}
</style>
