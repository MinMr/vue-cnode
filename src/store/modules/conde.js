/*
 * @Author: xiangmin 
 * @File: 首页cnode state
 * @Date: 2017-10-24 11:12:12 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-24 12:51:52
 */

import * as types from '../../constants/idnex';

export const state = {
    topicsList: []
};

export const mutations = {
    [types.FETCHE_TOPICS_LIST](state, payload) {
        state.topicsList = payload.data;
    }
}

