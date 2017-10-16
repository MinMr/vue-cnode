let util = {

};

/**
 * 页面添加title的方法
*/
util.title = function (title) {
    title = title ? title : 'vue-cnode';
    window.document.title = title;
};