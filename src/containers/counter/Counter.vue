<template>
    <div class="counter">
        counter
        <el-button @click="test">go to test</el-button>
    </div>
</template>

<script>
export default {
    name: 'vue',
    props: {

    },
    data() {
        return {

        }
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    methods: {
        test () {
            this.$router.push('/home/test')
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>

<style scoped lang="less">

 
</style>
