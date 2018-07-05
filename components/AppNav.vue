<template>
    <div class="nav-box" v-show="show">
        <div class="nav-wrapper">
            <div v-for="(item, index) in nav" :key="index">
                <div v-if="index === 2">
                    <div class="nav-icon" @click="openNav()">
                        <router-link :to="item.link">
                            <icon :name="item.ico" scale="1.8"></icon>
                        </router-link>
                    </div>
                </div>
                <div v-else @click="switchNav(index)">
                    <router-link :class="index === active ? 'active' : '' " :to="item.link">
                        <icon :name="item.ico" scale="1.5"></icon>
                        {{item.name}}
                    </router-link>
                </div>
            </div>
        </div>
        <transition name="slide-up">
            <div class="nav-sub-wrapper" v-show="subNav">
                <div class="nav-link">
                    <router-link to="/orchard">
                        <icon name="tree" scale="5"></icon>
                    </router-link>
                </div>
                <div class="nav-sub"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "appNav",
        data() {
            return {
                active: 0,
                subNav: false,
            }
        },
        computed: {
            ...mapState('appShell/appNav', [
                'show',
                'nav'
            ])
        },
        methods: {
            switchNav: function (index) {
                if (index !== 2 && index !== this.active) {
                    this.active = index;
                    console.log(index);
                }
            },
            openNav: function () {
                this.subNav = !this.subNav;
            },
        }
    }
</script>

<style lang="stylus" scoped>

    .slide-up-enter-active
        transition all .8s ease

    .slide-up-leave-active
        transition all .8s cubic-bezier(1.0, 0.5, 0.5, 1.0)

    .slide-up-enter
    .slide-up-leave-to
        transform translateY(20vw)
        opacity 0

    .nav-box
        position fixed
        bottom 0
        width 100%
        height 13vw
        z-index 777

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
            position relative
            display flex
            flex-direction column
            justify-content center
            align-items center
            width 13vw
            height 13vw
            color #e15517
            z-index 555

            &:link
            &:hover
            &:active
            &:visited
                color #e15517

            &.active
                color black

        .nav-icon
            position relative
            bottom 3vw
            display flex
            flex-direction column
            justify-content center
            align-items center
            width 13vw
            height 13vw
            color #e15517
            background aquamarine
            border 1px solid #e15517
            border-radius 50%
            box-sizing border-box
            z-index 555

    .nav-sub-wrapper
        position fixed
        bottom -6vw
        left 20vw
        width 60vw
        height 60vw
        background aqua
        border 1px solid black
        border-radius 50%
        box-sizing border-box

        .nav-link
            position relative
            top 15vw
            left 15vw
            width 30vw
            height 30vw
            color #e15517
            background aquamarine
            opacity 1.0
            border 1px solid #e15517
            border-radius 50%
            box-sizing border-box
            z-index 444

</style>
