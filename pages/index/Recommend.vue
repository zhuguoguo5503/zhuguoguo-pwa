<template>
    <div class="index-wrapper">
        <div class="index-container">
            <div class="goods-box" v-for=""></div>
        </div>
    </div>
</template>

<script>

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showBack: false,
            showSearch: false,
            showQrcode: false,
            showComment: false,
            showLocation: false,
            showLocationSearch: false,
            showTitle: true,
            title: '猜你喜欢',
            showCommunity: false,
            communityTitle: []
        })
    }

    export default {
        name: "recommend",
        metaInfo: {
            title: '猜你喜欢',
            titleTemplate: '助果果 - %s',
            meta: [
                {name: 'keywords', content: 'lavas PWA'},
                {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
            ]
        },
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    }
</script>

<style lang="stylus" scoped>

    .index-wrapper
        width 100%
        height 100%
        overflow hidden

        .index-container
            position relative
            top 11vw
            width 100%
            height 100%
            overflow-x hidden
            overflow-y scroll

</style>