/**
 * @file appShell/appNav module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_APP_NAV = 'SET_APP_NAV';

export const state = () => {
    return {
        show: false,
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
            name: '果园',
            link: '/orchard'
        },{
            ico: 'globe',
            name: '动态',
            link: '/community'
        },{
            ico: 'user',
            name: '我的',
            link: '/user'
        }]
    }
};

export const mutations = {
    [SET_APP_NAV](state, appNav) {
        state = Object.assign(state, appNav);
    }
};

export const actions = {

    /**
     * 设置底部导航栏
     *
     * @param {function} commit commit
     * @param {Object} appNav appNav
     */
    setAppNav({commit}, appNav) {
        commit(SET_APP_NAV, appNav)
    }
};
