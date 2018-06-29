<template>
    <div class="nav-wrapper" v-show="show">
        <router-link to="/">
            <icon name="home" scale="1.5"></icon>
            主页
        </router-link>
        <router-link to="/nearby">
            <icon name="map-marker" scale="1.5"></icon>
            附近
        </router-link>
        <router-link to="orchard">果园</router-link>
        <router-link to="/community">
            <icon name="globe" scale="1.5"></icon>
            动态
        </router-link>
        <router-link to="/user">
            <icon name="user" scale="1.5"></icon>
            我的
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "appNav",
        computed: {
            ...mapState('appShell/appNav', [
                'show',
                'nav'
            ])
        },
        created() {
            console.log('Nav is created.')
        }
    }
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
        z-index 777

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
