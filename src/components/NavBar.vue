/*
 * @Author: xiangmin 
 * @File: 导航菜单
 * @Date: 2017-11-03 11:00:34 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-11-03 17:11:46
 */
<template>
    <div class="nav-bar">
        <el-menu
            :router="true"
            default-active="/home/counter"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="/home/counter">
                <i class="anticon icon-apple1"></i>
                <span slot="title">Counter</span>
            </el-menu-item>
            <el-menu-item index="/home/mock">
                <i class="anticon icon-setting"></i>
                <span slot="title">Mock.js</span>
            </el-menu-item>
            <el-menu-item index="/home/echart">
                <i class="anticon icon-picture"></i>
                <span slot="title">Vue-Echart</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleNavClick (path) {
            this.$router.push(path);
        }
    }
  }
</script>

    </div>
</template>

<script>
export default {
    name: 'vue',
    data() {
        return {

        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped lang="less">
.nav-bar {
    .el-menu {
        border-right: none;
    }
    li {
        width: 200px;
    }
    .el-menu-item.is-active {
        border-right: 2px #409EFF solid;
    }
}
 
</style>
