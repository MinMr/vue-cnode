/*
 * @Author: xiangmin 
 * @File: 全局调用的actions 
 * @Date: 2017-10-24 10:18:11 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-24 10:22:08
 */
import Axios from 'axios';
import {
	Message
} from 'element-ui';

/**
 * 发送没有异步请求的action；
*/
export const dispatch = ({commit}, {type, payload}) => {
	commit(type, payload);
};

/**
 * 异步请求action
*/
/**
 * post
 * @param  {String} url    [地址]
 * @param  {Object} params [参数]
 * @return {Object}        [Promise]
 */
export const $get = ({commit}, {url, type, params}) => {
	return new Promise((resolve, reject) => {
		Axios.get(url, {
			params: {
				...params,
				_t: new Date().getTime(),
			}
		}).then((res) => {
			if (res.statusText == 'OK') {
                if (res.data.code == 0) {
                    commit(type, res.data);
                    resolve()
                } else {
                    failMessage(res.data.message);
                }
			} else {
				failMessage()
				reject(res)
			}
		}).catch((mes) => {
			failMessage()
			reject(mes)
		})
	})
}
/**
 * post
 * @param  {String} url    [地址]
 * @param  {Object} params [参数]
 * @param  {String} type   [可不传，设定为form为formdata提交]
 * @return {Object}        [Promise]
 */
export const $post = ({commit}, {type, url, params}) => {
	if (type == 'form') {
		return new Promise((resolve, reject) => {
			Axios.post(url, qs.stringify(params)).then((res) => {
				if (res.statusText == 'OK') {
                    if (res.data.code == 0) {
                        commit(type, res.data)
                        resolve()
                    } else {
                        failMessage(res.data.message);
                    }
				} else {
					failMessage()
					reject(res)
				}
			}).catch((mes) => {
				failMessage()
				reject(mes)
			})
		})
	} else {
		return new Promise((resolve, reject) => {
			Axios.post(url, {
				...params
			}).then((res) => {
				if (res.statusText == 'OK') {
                    if (res.data.code == 0) {
                        resolve(res.data)
                    } else {
                        failMessage(res.data.message);
                    }
				} else {
					failMessage()
					reject(res)
				}
			}).catch((mes) => {
				failMessage()
				reject(mes)
			})
		})
	}
}


function failMessage(mes='数据获取失败') {
	Message({
		showClose: true,
		message: mes,
		type: 'warning'
	})
}