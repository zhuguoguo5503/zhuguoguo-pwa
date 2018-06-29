<template>
    <div class="index-wrapper">
        <header class="index-header">
            <div class="index-header-icon">
                <icon name="qrcode" scale="2"/>
            </div>
            <div class="index-search-group">
                <form>
                    <input class="index-search-input" type="text" title="search" required>
                    <button class="index-search-btn" type="submit">
                        <icon name="search"></icon>
                    </button>
                </form>
            </div>
            <div class="index-header-icon">
                <icon name="comment" scale="2"/>
            </div>
        </header>
        <div class="index-container">
            <div class="index-carousel-wrapper">
                <div class="index-carousel-msg">
                    <div>
                        <icon name="bullhorn"></icon>
                    </div>
                    <div>今天集会时间 11:00 - 13:00</div>
                </div>
                <div class="index-carousel-container"></div>
                <div class="index-carousel-blank"></div>
                <div class="index-nav-wrapper">
                    <div class="index-nav-logo"></div>
                    <div class="index-nav-sub index-nav-1st"></div>
                    <div class="index-nav-sub index-nav-2nd"></div>
                    <div class="index-nav-sub index-nav-3rd"></div>
                    <div class="index-nav-sub index-nav-4th"></div>
                    <div class="index-nav-sub index-nav-5th"></div>
                    <div class="index-nav-sub index-nav-6th"></div>
                    <div class="index-nav-sub index-nav-7th"></div>
                </div>
            </div>
            <div class="index-sale-wrapper">
                <div class="index-sale-box"></div>
                <div class="index-sale-triangle"></div>
                <div class="index-sale-title">限时特卖</div>
                <div class="index-sale-main"></div>
                <div class="index-sale-sub-box">
                    <div class="index-sale-sub"></div>
                    <div class="index-sale-sub"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function setState(store) {
    }

    export default {
        name: "index",
        metaInfo: {
            title: '主页',
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
        width 100%
        height 100%
        overflow: hidden;

        //<header>
        .index-header
            position fixed
            top 0
            display flex
            flex-direction row
            justify-content space-around
            align-items center
            width 100%
            height 11vw
            background #e15517

            .index-header-icon
                color whitesmoke

            .index-search-group
                position relative
                width 70vw
                height 7vw

                .index-search-input
                    position absolute
                    top: 0
                    left 0
                    width 61vw
                    height 7vw
                    padding 0
                    padding-left 5vw
                    background whitesmoke
                    border 1px solid black
                    border-right none
                    border-radius 4vw 0 0 4vw
                    box-sizing border-box

                .index-search-btn
                    position absolute
                    top: 0
                    left 61vw
                    width 9vw
                    height 7vw
                    padding 0
                    background whitesmoke
                    border 1px solid black
                    border-left none
                    border-radius 0 4vw 4vw 0
                    box-sizing border-box
        //</header>

        .index-container
            position relative
            top 11vw
            width 100%
            height 100%
            overflow-x hidden
            overflow-y scroll

            > div:last-child
                margin-bottom 25vw

            //<carousel>
            .index-carousel-wrapper
                position relative
                width 100%
                height 60vw
                border-bottom 1px solid black
                box-sizing border-box

                .index-carousel-container
                    width 100%
                    height 48vw
                    border-bottom 1px solid black
                    box-sizing border-box

                .index-carousel-msg
                .index-carousel-blank
                    width 100%
                    height 6vw
                    border-bottom 1px solid black
                    box-sizing border-box

                .index-carousel-msg
                    display flex
                    flex-direction row
                    justify-content left
                    align-items center

                    :last-child
                        margin-left 3vw

                .index-nav-wrapper
                    position absolute
                    top 0
                    right -20vw
                    width 60vw
                    height 60vw
                    border 1px solid black
                    border-radius 30vw
                    box-sizing border-box

                    .index-nav-logo
                        position absolute
                        top 15vw
                        left 15vw
                        width 30vw
                        height 30vw
                        border 1px solid black
                        border-radius 15vw
                        box-sizing border-box

                    .index-nav-sub
                        position absolute
                        width 10vw
                        height 10vw
                        border 1px solid black
                        border-radius 5vw
                        box-sizing border-box

                    .index-nav-1st
                        top 3vw
                        right 21vw

                    .index-nav-2nd
                        top 5vw
                        right 33vw

                    .index-nav-3rd
                        top 13vw
                        right 43vw

                    .index-nav-4th
                        top 25vw
                        right 46vw

                    .index-nav-5th
                        top 37vw
                        right 43vw

                    .index-nav-6th
                        top 45vw
                        right 33vw

                    .index-nav-7th
                        top 47vw
                        right 21vw
            //</carousel>

            .index-sale-wrapper
                position relative
                width 100%
                height 40vw
                border-bottom 1px solid black
                box-sizing border-box

                .index-sale-box
                    position absolute
                    top -4vw
                    width 60vw
                    border-top 8vw solid red
                    border-right 4vw solid transparent
                    box-sizing border-box

                .index-sale-triangle
                    position absolute
                    top -4vw
                    left 58vw
                    width 2vw
                    border-bottom 4vw solid black
                    border-left 2vw solid transparent
                    border-right 2vw solid transparent
                    box-sizing border-box

                .index-sale-title
                    position absolute
                    top -4vw
                    width 56vw
                    height 8vw
                    padding-left 4vw
                    font-size 20px
                    text-align left
                    line-height 8vw
                    box-sizing border-box
                    z-index 10

</style>
