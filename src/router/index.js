/*
 * @Author: xiangmin 
 * @File: 路由文件配置
 * @Date: 2017-10-15 20:36:33 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-15 20:53:04
 */

import Vue from 'vue';
import Router from 'vue-router';

/**
 * 配置按需加载
 */
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);

Vue.use(Router);

export default new Router({
    history: true,
    hash: 'hash',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        }
    ]
})