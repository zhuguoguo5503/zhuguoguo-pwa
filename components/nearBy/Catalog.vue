<template>
    <div class="index-catalog-wrapper">
        <div class="index-catalog" v-for="(item, index) in nav" :key="index" :class="active === index ? 'active': ''" @click="switchNav(index)">{{item}}</div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "catalog",
        data() {
            return {
                active: 0
            }
        },
        computed: {
            ...mapState('appShell/nearBy/catalog', [
                'catalog'
            ])
        },
        methods: {
            switchNav: function (index) {
                if (index !== this.active) {
                    this.active = index;
                }
            }
        },
        async asyncData({store, route}) {
            await store.dispatch('appShell/nearBy/catalog/setCatalog', {
                //
            })
        }
    }
</script>

<style lang="stylus" scoped>

    .index-catalog-wrapper
        position fixed
        top 11vw
        display flex
        flex-direction row
        justify-content space-around
        align-items flex-end
        width 100%
        height 7vw
        border-bottom 1px solid black
        box-sizing border-box

        .index-catalog
            height 6vw
            line-height 6vw

        .active
            font-weight bold
            border-bottom 2px solid #e15517
            box-sizing border-box

</style>