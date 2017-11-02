/*
 * @Author: xiangmin 
 * @File: 路由文件配置
 * @Date: 2017-10-15 20:36:33 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-11-02 16:42:56
 */

import Vue from 'vue';
import Router from 'vue-router';

/**
 * 配置按需加载
 */
const Index = resolve => require(['@/containers/Index'], resolve);
const TopicDetail = resolve => require(['@/containers/TopicDetail'], resolve);

Vue.use(Router);

export default new Router({
    history: true,
    hash: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/topicDetail',
            name: 'TopicDetail',
            component: TopicDetail
        }
    ]
})