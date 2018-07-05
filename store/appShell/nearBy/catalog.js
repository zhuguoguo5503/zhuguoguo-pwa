/**
 * @file appShell/nearBy/catalog module
 * @author Tricker(tricker.pan@gmail.com)
 */

import axios from 'axios';

export const SET_CATALOG = "SET_CATALOG";

export const store = () => {
    return {
        catalog: [
            '享美食',
            '惠生活',
            '爱玩乐',
            '住酒店',
            '全部'
        ]
    }
};

export const mutations = {
    [SET_CATALOG](state, catalog) {
        // state = Object.assign(state, catalog);
        state.catalog = catalog;
    }
};

export const actions = {
    async setCatalog({commit}, params) {

        try {
            let url = 'http://127.0.0.1';
            let result = await axios({
                url: url,
                method: 'post',
                headers: {
                    'Content-Type': 'application/vnd.api+json'
                },
                data: {},
                timeout: 60000,
            });

            let catalog = result.data;

            commit(SET_CATALOG, catalog);
        } catch (e) {
            console.log('error in setCatalog');
            console.log(e);
        }

        // commit(SET_CATALOG, catalog);
    }
};