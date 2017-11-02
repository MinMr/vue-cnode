/*
import default from './../store/actions/index';
 * @Author: xiangmin 
 * @File: 所有文件接口
 * @Date: 2017-10-24 10:05:03 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-25 11:17:44
 */

const baseUrl =  'https://cnodejs.org/api/v1/';

const api = {
    fetcheTopicsList: `${baseUrl}topics`,  // 获取列表页内容；
    fetchTopicDetailContent: `${baseUrl}topic`
}

export default api;