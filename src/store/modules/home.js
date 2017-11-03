/*
 * @Author: xiangmin 
 * @File: 所有同步action在这里管理 
 * @Date: 2017-11-03 17:43:23 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-11-03 17:51:13
 */
import * as types from '../../constants/idnex';

export const state = {
    counter: 0
};

export const mutations = {
    [types.SUB](state, payload) {
        state.counter--;
    },
    [types.ADD](state, payload) {
        state.counter++;
    }
}