/**
 * @file entry
 * @author Tricker(tricker.pan@gmail.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';

import Icon from 'vue-awesome/components/Icon.vue';

Vue.use(Meta);

Vue.config.productionTip = false;

Vue.component('icon', Icon);

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
