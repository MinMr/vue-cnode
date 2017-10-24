<template>
    <div class="cnode public-box">
        <div>
            <el-button-group>
                <el-button
                    v-for="(item, index) in tabArr"
                    type="primary" 
                    :key="index"
                    @click="handleTabClick(item.type)"
                    size="large">
                    {{ item.text }}
                </el-button>
            </el-button-group>
            <el-button type="primary" class="new-topics">
                新建主题
            </el-button>
        </div>
        <div class="content-box" v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中">
            <ul>
                <li v-for="(item, index) in topicsList"  :key="index">
                    <img class="img" :src="item.author.avatar_url" alt="">
                    <span class="user">{{ item.author.loginname }}</span>
                    <span>
                        <span class="reply">{{ item.reply_count }}</span>
                        <span>/{{ item.visit_count }}</span>
                    </span>
                    <span :class="item.top ? 'type top' : 'type'">
                        {{ item.top ? '置顶' : type[item.tab] ? type[item.tab] : '问题' }}
                    </span>
                    <span class="title">{{ item.title }}</span>
                    <span class="img-box">
                        <span class="last-reply">两小时前</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '../api/index';
import * as types from '../constants/idnex'; 
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'cnode',
    data () {
        return {
            page: 1,
            tab: '',
            limit: 100,
            mdrender: true,
            activeName: 'first',
            loading: true,
            tabArr: [
                {
                    type: '',
                    text: '全部',
                }, {
                    type: 'ask',
                    text: '问答',
                }, {
                    type: 'share',
                    text: '分享',
                }, {
                    type: 'job',
                    text: '招聘',
                }, {
                    type: 'good',
                    text: '客户端测试',
                }
            ],
            type: {
                ask: '问答',
                share: '分享',
                job: '招聘',
                good: '测试'
            }
        }
    },
    computed : {
        ...mapGetters(['topicsList'])
    },
    methods: {
        ...mapActions(['$get']),
        // 获取列表
        fetcheTopicsList () {
            this.loading = true;
            const params = {
                page: this.page,
                tab: this.tab,
                limit: this.limit,
                mdrender: this.mdrender
            };
            this.$get({
                url: api.fetcheTopicsList,
                type: types.FETCHE_TOPICS_LIST,
                params: params
            }).then(() => {
                this.loading = false;
            });
        },
        handleTabClick(tab) {
            this.tab = tab;
            this.fetcheTopicsList();
        }
    },
    mounted () {
        this.fetcheTopicsList();
        // this.$nextTick(() => {
        //     let clientHeight =  document.documentElement.clientHeight || document.body.clientHeight;
        //     let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //     document.body.onscroll = () => {
        //         let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //         console.log(scrollHeight - scrollTop - clientHeight);
        //         console.log(scrollHeight, scrollTop, clientHeight);
        //         const height = scrollHeight - (scrollTop + clientHeight);
        //         if (height > 50 && height < 60) {
        //             this.page++;
        //             this.fetcheTopicsList();
        //         }
        //     };
        // })
    }
}
</script>

<style lang="less" scoped>
.cnode {
    background: #fff;
    padding: 20px 150px;
    min-width: 690px;
    .new-topics {
        float: right;
    }
    .content-box {
        margin-top: 20px;
        font-size: 14px;
        li {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px #ccc solid;
            cursor: pointer;
            .reply {
                color: #f00;
            }
            .user {
                margin-right: 10px;
            }
            .type {
                margin: 0 10px;
                width: 35px;
                height: 25px;
                line-height: 25px;
                border-radius: 3px;
                background: #ccc;
                display: inline-block;
                margin-top: -10px;
                text-align: center;
                font-size: 12px;
            }
            .top {
                background: #80bd01;
                color: #fff;
            }
            .img-box {
                float: right;
            }
            .img {
                margin-right: 15px;
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
        }
    }
}
@media screen and (max-width: 1000px) {
    .cnode {
       padding: 20px;
    }
}
</style>