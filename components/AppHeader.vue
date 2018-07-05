<template>

    <transition name="slide-down">
        <header class="index-header" v-show="show">
            <div class="index-header-icon" v-show="showQrcode">
                <icon name="qrcode" scale="2"/>
            </div>
            <div class="index-search-group" v-show="showSearch">
                <form>
                    <input class="index-search-input" type="text" title="search" required>
                    <button class="index-search-btn" type="submit">
                        <icon name="search"></icon>
                    </button>
                </form>
            </div>
            <div class="index-header-icon" v-show="showComment">
                <icon name="comment" scale="2"/>
            </div>
            <div class="index-header-icon" v-show="showLocation">
                <icon name="map-marker" scale="1.5"></icon>
                <span>白山</span>
            </div>
            <div class="index-search-group" v-show="showLocationSearch">
                <form>
                    <input class="index-search-input" type="text" title="search" placeholder="找附近的吃喝玩乐" required>
                    <button class="index-search-btn" type="submit">
                        <icon name="search"></icon>
                    </button>
                </form>
            </div>
            <div class="switch-title-wrapper" v-show="showCommunity">
                <div v-for="(item, index) in communityTitle" :key="index" :class="active === index ? 'active' : ''" @click="switchTitle(index)">
                    {{item.name}}
                </div>
            </div>
            <div v-show="showTitle">
                {{title}}
            </div>
        </header>
    </transition>

</template>

<script>

    import {mapState} from 'vuex';

    export default {
        name: "appHeader",
        data() {
            return {
                active: 0
            }
        },
        computed: {
            ...mapState('appShell/appHeader', [
                'show',
                'showBack',
                'showSearch',
                'showQrcode',
                'showComment',
                'showLocation',
                'showLocationSearch',
                'showTitle',
                'title',
                'showCommunity',
                'communityTitle'
            ])
        },
        methods: {
            switchTitle: function (index) {
                if (index !== this.active) {
                    this.active = index;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .slide-down-enter-active
        transition all 1s ease

    .slide-down-leave-active
        transition all 1s cubic-bezier(1.0, 0.5, 0.5, 1.0)

    .slide-down-enter
    .slide-down-leave-to
        transform translateY(-11vw)
        opacity 0

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
        z-index 999

        .index-header-icon
            color whitesmoke

        .index-search-group
            position relative
            width 70vw
            height 7vw

            .index-search-input
                position absolute
                top 0
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
                top 0
                right 0
                width 9vw
                height 7vw
                padding 0
                background whitesmoke
                border 1px solid black
                border-left none
                border-radius 0 4vw 4vw 0
                box-sizing border-box

        .switch-title-wrapper
            display flex
            flex-direction row
            justify-content center
            align-items center

            .switch-title
                height 6vw
                font-size 16px
                line-height 6vw
                margin-left 1vw
                margin-right 1vw
                box-sizing border-box

            .active
                font-weight bold
                border-bottom 2px solid whitesmoke


</style>
