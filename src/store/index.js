import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import modules from './modules';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

// 判断是生产环境还是开发环境
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions, 
    getters, 
    modules,
    // plugins: [createLogger()]
    // 打印action，state日志，仅供开发时使用；
    plugins: debug ? [createLogger()] : []
});