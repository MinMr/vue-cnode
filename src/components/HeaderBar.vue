<template>
    <div class="header-bar">
        <a class="brand" href="/">
            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
        </a>
        <ul class="nav">
            <li>
                <p @click="handleToIndexClick">
                    首页
                </p>
            </li>
            <li>
                <p>Vue</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    methods: {
        handleToIndexClick () {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="less">
.header-bar {
    width: 100%;
    height: 100%;
    line-height: 70px;
   .brand {
        width: 120px;
        padding: 3px 20px;
        height: 28px;
        img {
            height: auto;
            max-width: 120px;
            vertical-align: middle;
        }
    }
    .nav {
        float: right;
        color: #fff;
        li {
            float: left;
            width: 100px;
            p {
                cursor: pointer;
            }
        }
    }
}
</style>