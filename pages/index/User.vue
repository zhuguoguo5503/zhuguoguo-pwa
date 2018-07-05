<template>
    <div class="index-wrapper">
        <div class="user-wrapper">
            <div class="user-header">
                <div class="user-balance">
                    <span>余额</span>
                    <span>10.24</span>
                </div>
                <div class="user-avatar">
                    <img src="http://b.hiphotos.baidu.com/image/pic/item/a8773912b31bb051d18c53de3a7adab44bede098.jpg" alt="">
                    <span>Mr.Tricker</span>
                </div>
                <div class="user-follower">
                    <span>果友</span>
                    <span>1024</span>
                </div>
            </div>
            <div class="user-menu">
                <div class="order-wrapper">
                    <router-link class="order-mine" to="/">
                        <div>
                            <icon name="list-alt" scale="1"></icon>
                            我的订单
                        </div>
                        <div>
                            查看全部订单
                            <icon name="angle-right" scale="1"></icon>
                        </div>
                    </router-link>
                </div>
            </div>
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
            title: '个人中心',
            showCommunity: false,
            communityTitle: []
        })
    }
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
        activated() {
            setState(this.$store);
        }
    }
</script>

<style lang="stylus" scoped>

    .index-wrapper
        width 100%
        height 100%
        overflow: hidden;

        .user-wrapper
            position relative
            top 11vw
            width 100%
            height 100%
            background darkturquoise
            overflow-x hidden
            overflow-y scroll

            .user-header
                position relative
                left -10vw
                display flex
                flex-direction row
                justify-content space-around
                align-items center
                padding 0 10vw
                width 120vw
                height 40vw
                background #e15117
                border-radius: 0 0 50% 50% / 40%
                box-sizing border-box

                .user-balance
                .user-follower
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center


                    span:first-child
                        color whitesmoke

                    span:last-child
                        color yellow


                .user-avatar
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center

                    img
                        width 20vw
                        height 20vw
                        border 3px solid whitesmoke
                        border-radius 50%

                    span
                        color whitesmoke
                        font-size 12px
                        font-weight bold

            .user-menu
                width 100%
                margin-top 2vw
                background whitesmoke

                .order-wrapper
                    width 100%
                    padding 0 4vw
                    box-sizing border-box

                    .order-mine
                        display flex
                        flex-direction row
                        justify-content space-between
                        align-items center
                        width 100%
                        height 8vw
                        line-height 8vw
                        border-bottom 1px solid black

                        > div
                            display flex
                            align-items center

</style>
