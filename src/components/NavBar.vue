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
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/home/counter">Counter</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项1</el-menu-item>
                    <el-menu-item index="1-4">选项2</el-menu-item>
                    <el-menu-item index="1-5">选项1</el-menu-item>
                    <el-menu-item index="1-6">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
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
            debugger
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
