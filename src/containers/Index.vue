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
                <li v-for="(item, index) in list"  :key="index">
                    <img class="img" :src="item.author.avatar_url" alt="">
                    <span class="user">{{ item.author.loginname }}</span>
                    <span>
                        <span class="reply">{{ item.reply_count }}</span>
                        <span>/{{ item.visit_count }}</span>
                    </span>
                    <span :class="item.top ? 'type top' : 'type'">
                        {{ item.top ? '置顶' : type[item.tab] ? type[item.tab] : '问题' }}
                    </span>
                    <span class="title" @click="handleTitleClick(item.id)">{{ item.title }}</span>
                    <span class="img-box">
                        <span class="last-reply">两小时前</span>
                    </span>
                </li>
            </ul>
            <el-button type="primary" class="load-more" @click="handleLoadMoreClick">加载更多...</el-button>
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
            limit: 20,
            mdrender: true,
            activeName: 'first',
            loading: true,
            list: [],
            flag: true,
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
    watch: {
        topicsList () {
            if (this.flag) {
                this.flag = false;
                this.list = this.topicsList;
            }
        }
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
                this.list = this.topicsList;
            });
        },
        handleTabClick (tab) {
            this.tab = tab;
            this.fetcheTopicsList();
        },
        handleLoadMoreClick () {
            this.page++;
            this.fetcheTopicsList();
            this.list = this.list.concat(this.topicsList);
        },
        handleTitleClick (id) {
            this.$router.push({
                path: '/topicDetail',
                query: {
                    id: id
                }
            })
        }
    },
    mounted () {
        this.fetcheTopicsList();
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
                width: 25px;
                height: 25px;
                vertical-align: middle;
            }
            .title {
                cursor: pointer;
            }
        }
        .load-more {
            width: 100%;
            margin: 10px 0;
        }
    }
}
@media screen and (max-width: 1000px) {
    .cnode {
       padding: 20px;
    }
}
</style>