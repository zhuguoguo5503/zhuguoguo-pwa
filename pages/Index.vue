<template>
    <div>
        <router-view />
        <app-nav></app-nav>
    </div>
</template>

<script>

    import AppNav from '@/components/AppNav'

    function setState(store) {
        store.dispatch('appShell/appNav/setAppNav', {
            show: true,
            nav: [{
                ico: 'home',
                name: '主页',
                link: '/'
            },{
                ico: 'map-marker',
                name: '附近',
                link: '/nearBy'
            },{
                ico: 'tree',
                name: '猜你喜欢',
                link: '/recommend'
            },{
                ico: 'globe',
                name: '动态',
                link: '/community'
            },{
                ico: 'user',
                name: '我的',
                link: '/user'
            }]
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
        components: {
            AppNav
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



</style>
