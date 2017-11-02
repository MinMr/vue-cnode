<template>
    <div class="topic-detail public-box">
        <div class="topic-detail-title">
            <p>
                {{topicDetailTitle}}
            </p>
        </div>
        <div class="topic-detail-content" v-html="topicDetailContent">
            {{topicDetailContent}}
        </div>
        <div class="top-detail-reply" v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中">
            <p>
                <span>评论区域</span>     
                <span class="">共{{replyCount}}条评论</span>
            </p>
            <ul>
                <li v-for="(item, index) in topicDetailReply" :key="index">
                    <div>
                        <span>
                            <img class="img-header" :src="item.author.avatar_url" alt="">
                            <span>{{index + 1}}楼</span>
                        </span>
                        <span v-html="item.content">
                           {{ item.content }} 
                        </span>
                    </div>
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
    name: 'TopDetail',
    data () {
        return {
            loading: true,
        }
    },
    computed: {
        ...mapGetters(['topicDetailContent', 'topicDetailTitle', 'topicDetailReply', 'replyCount']),
    },
    methods: {
        ...mapActions(['$get']),
        fetchTopicDetailContent () {
            this.$get({
                type: types.FETCHE_TOPICS_DSTAIL_CONTENT,
                url: `${api.fetchTopicDetailContent}/${this.$route.query.id}`,
            }).then(() => {
                this.loading = false;
            })
        }
    },
    mounted () {
        this.fetchTopicDetailContent();
    }
}
</script>

<style lang="less">
.topic-detail {
    padding: 20px 150px;
    min-width: 690px; 
    font-size: 14px;
    line-height: 25px;
    img {
        height: auto;
        max-width: 100% !important;
        vertical-align: middle;
        border: 0;
    }
    li {
        list-style: disc;
        margin-left: 25px;
        margin: 15px;
        .img-header {
            width: 25px;
            height: 25px;
        }
    }
    .topic-detail-title {
        p {
            font-size: 24px;
            margin-bottom: 20px;
            text-align: center;
        }
    }
    .top-detail-reply {
        margin-top: 20px;
    }
}  
@media screen and (max-width: 1000px) {
    .topic-detail {
       padding: 20px;
    }
}
</style>