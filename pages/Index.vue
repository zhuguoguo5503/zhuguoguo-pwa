<template>
    <div>
        <router-view />

        <!--<div class="nav-wrapper">-->
            <!--<router-link to="/">-->
                <!--<icon name="home" scale="1.5"></icon>-->
                <!--主页-->
            <!--</router-link>-->
            <!--<router-link to="/nearby">-->
                <!--<icon name="map-marker" scale="1.5"></icon>-->
                <!--附近-->
            <!--</router-link>-->
            <!--<router-link to="orchard">果园</router-link>-->
            <!--<router-link to="/community">-->
                <!--<icon name="globe" scale="1.5"></icon>-->
                <!--动态-->
            <!--</router-link>-->
            <!--<router-link to="/user">-->
                <!--<icon name="user" scale="1.5"></icon>-->
                <!--我的-->
            <!--</router-link>-->
        <!--</div>-->
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    function setState(store) {
        store.dispatch('appShell/appNav/setAppNav', {
            show: true,
            nav: [
                '主页',
                '附近',
                '果园',
                '动态',
                '我的'
            ]
        });
    }

    export default {
        name: 'index',
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
        activated() {
            setState(this.$store);
        }
    };
</script>

<style lang="stylus" scoped>

    .nav-wrapper
        position fixed
        bottom 0
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        height 13vw
        width 100%
        text-align center
        background whitesmoke
        border-top 1px solid #e15517
        box-sizing border-box

        a
            display flex
            flex-direction column
            justify-content center
            align-items center
            color #e15517

            &:link
            &:hover
            &:active
            &:visited
                color #e15517

</style>
