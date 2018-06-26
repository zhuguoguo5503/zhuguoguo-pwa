/**
 * @file appShell/appNav module
 * @author Tricker
 */

export const SET_APP_NAV = 'SET_APP_NAV';

export const state = () => {
    return {

        /**
         * 是否展示底部导航栏
         *
         * @type {boolean}
         */
        show: true
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
