/*
 * @Author: xiangmin 
 * @File: post和get请求函数
 * @Date: 2017-10-24 10:11:04 
 * @Last Modified by: xiangmin
 * @Last Modified time: 2017-10-24 10:12:01
 */
import Axios from 'axios';
import {
	Message
} from 'element-ui';

/**
 * post
 * @param  {String} url    [地址]
 * @param  {Object} params [参数]
 * @return {Object}        [Promise]
 */
export const $get = (url, params) => {
		return new Promise((resolve, reject) => {
			Axios.get(url, {
				params: {
					...params,
					_t: new Date().getTime(),
				}
			}).then((res) => {
				if (res.status === 200) {
					if (res.data.code == 0) {
						resolve(res.data)
					} else {
						failMessage(res.data.message);
						reject(res)
					}
				} else {
					failMessage()
					reject(res)
				}
			}).catch((mes) => {
					failMessage(mes.response.data.message)
					reject(mes.response.data);
			})
		})
	}
	/**
	 * post
	 * @param  {String} url    [地址]
	 * @param  {Object} {Array} params [参数,可直接传入一个数组]
	 * @param  {String} type   [可不传，设定为form为formdata提交]
	 * @return {Object}        [Promise]
	 */
export const $post = (url, params, type) => {
	if (type == 'form') {
		return new Promise((resolve, reject) => {
			Axios.post(url, qs.stringify(params), {
			}).then((res) => {
				if (res.status === 200) {
					if (res.data.code == 0) {
						resolve(res.data)
					} else {
						failMessage(res.data.message);
						reject(res)
					}
				} else {
					failMessage()
					reject(res)
				}
			}).catch((mes) => {
				failMessage(mes.response.data.message)
				reject(mes.response.data)
			})
		})
	} else {
		return new Promise((resolve, reject) => {
			let type = Object.prototype.toString.call(params);
			if (type == '[object Array]') {
				Axios.post(url, params).then((res) => {
					if (res.status === 200) {
						if (res.data.code == 0) {
							resolve(res.data)
						} else {
							failMessage(res.data.message)
							reject(res)
						}
					} else {
						failMessage()
						reject(res)
					}
				}).catch((mes) => {
                    failMessage();
                    reject(mes.response.data);
				})
			} else {
				Axios.post(url, {...params}).then((res) => {
					if (res.status === 200) {
						if (res.data.code == 0) {
							resolve(res.data)
						} else {
							failMessage(res.data.message)
							reject(res)
						}
					} else {
						failMessage()
						reject(res)
					}
				}).catch((mes) => {
                    failMessage(mes.response.data.message)
                    reject(mes.response.data);
				})
			}
		})
	}
}


function failMessage(mes = '数据获取失败') {
	Message({
		showClose: true,
		message: mes,
		type: 'warning'
	})
}