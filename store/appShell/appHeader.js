/**
 * @file appShell/appHeader module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_APP_HEADER = 'SET_APP_HEADER';

export const state = () => {
    return {
        show: false,
        showBack: false,
        showSearch: false,
        showQrcode: false,
        showComment: false,
        showLocation: false,
        showLocationSearch: false,
        showTitle: false,
        title: '助果果',
        showCommunity: false,
        communityTitle: [{
            name: '关注',
            link: '/'
        },{
            name: '附近',
            link: '/'
        },{
            name: '热门',
            link: '/'
        }]
    }
};

export const mutations = {
    [SET_APP_HEADER](state, appHeader) {
        state = Object.assign(state, appHeader);
    }
};

export const actions = {

    /**
     * 设置头部样式
     *
     * @param {function} commit commit
     * @param {Object} appHeader appHeader
     */
    setAppHeader({commit}, appHeader) {
        commit(SET_APP_HEADER, appHeader)
    }
};
