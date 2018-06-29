<template>
    <div>
        <h2>果园</h2>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    function setState(store) {
        store.dispatch('appShell/appNav/setAppNav', {
            show: false,
        });
    }

    export default {
        name: 'orchard',
        metaInfo: {
            title: '果园',
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

<style scoped>

</style>
