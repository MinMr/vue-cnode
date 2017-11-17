/*
 * @Author: xiangmin 
 * @File: vuex的加减法 
 * @Date: 2017-11-03 18:06:06 
 * @Last Modified by:   xiangmin 
 * @Last Modified time: 2017-11-03 18:06:06 
 */
<template>
    <div class="counter">
        <h1>Vuex Counter</h1>
        <el-button type="primary" @click="handleAddBtnClick">ADD</el-button>
        <el-button @click="handleSubBtnClick">SUB</el-button>
        <p class="num">Current number is:   <span class="current-num">{{ counter }}</span></p>
    </div>
</template>

<script>
import * as types from '../../constants/idnex.js';
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'vue',
    computed: {
        ...mapGetters(['counter'])
    },
    methods: {
        ...mapActions(['dispatch']),
        handleAddBtnClick () {
            this.dispatch({
                type: types.ADD
            });
        },
        handleSubBtnClick () {
            this.dispatch({
                type: types.SUB
            });
        }
    }
}
</script>

<style scoped lang="less">
.counter {
    text-align: center;
    h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .num {
        margin-top: 30px;
        .current-num {
            color: #f00
        }
    }
}
</style>
