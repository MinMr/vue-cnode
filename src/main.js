/*
 * @Author: xiangmin 
 * @File: 入口文件
 * @Date: 2017-10-15 20:49:19 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-16 12:51:27
 */

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
