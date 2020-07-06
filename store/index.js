import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import settings from './modules/settings';
import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const createStore = () => {
    return new Vuex.Store({
        modules: {
            app,
            settings,
            user
        },
        getters
    });
};

export default createStore;
