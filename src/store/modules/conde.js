/*
 * @Author: xiangmin 
 * @File: 首页cnode state
 * @Date: 2017-10-24 11:12:12 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-11-02 16:50:22
 */

import * as types from '../../constants/idnex';

export const state = {
    topicsList: [],
    topicDetailContent: '',
    topicDetailTitle: '',
    topicDetailReply: [],
    replyCount: 0,
};

export const mutations = {
    [types.FETCHE_TOPICS_LIST](state, payload) {
        state.topicsList = payload.data;
    },
    [types.FETCHE_TOPICS_DSTAIL_CONTENT](state, payload) {
        state.topicDetailContent = payload.data.content;
        state.topicDetailTitle = payload.data.title;
        state.topicDetailReply = payload.data.replies;
        state.replyCount = payload.data.reply_count;
    }
}

