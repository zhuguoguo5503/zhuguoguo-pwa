<template>
    <transition name="slide-down">
        <nav class="app-nav-wrapper" v-show="show">
            12313213
            <router-link to="/">主页</router-link>
            <router-link to="/index/nearby">附近</router-link>
        </nav>
    </transition>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "appNav",
        computed: {
            ...mapState('appShell/appNav', [
                'show'
            ])
        },
        created() {
            console.log('Nav is created.')
        }
    }
</script>

<style lang="stylus" scoped>
    .app-nav-wrapper
        height 100px
        width 100px
        background black
</style>
