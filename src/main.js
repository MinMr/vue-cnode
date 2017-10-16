/*
 * @Author: xiangmin 
 * @File: 入口文件
 * @Date: 2017-10-15 20:49:19 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-16 17:08:47
 */

import Vue from 'vue';
import App from './App';
import 'style/reset.css' 
import router from './router';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
