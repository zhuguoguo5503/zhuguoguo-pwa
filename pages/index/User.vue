<template>
    <div class="index-wrapper">
        <header class="index-header">
            <div class="index-title">个人中心</div>
        </header>
    </div>
</template>

<script>
    function setState(store) {}
    export default {
        name: "index",
        metaInfo: {
            title: '个人中心',
            titleTemplate: '助果果 - %s',
            meta: [
                {name: 'keywords', content: 'lavas PWA'},
                {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
            ]
        },
        async asyncData({store, route}) {
            setState(store);
        },
    }
</script>

<style lang="stylus" scoped>

    .index-wrapper
        height 100%
        padding-top 18vw
        overflow: hidden;

        .index-header
            position fixed
            top 0
            display flex
            flex-direction row
            justify-content center
            align-items center
            width 100%
            height 11vw
            color whitesmoke
            background #e15517

            .index-title
                font-size 16px
                font-weight bold

</style>
