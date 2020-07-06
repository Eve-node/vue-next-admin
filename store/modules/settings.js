/*
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:06
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-18 15:01:22
 */
import defaultSettings from '@/settings';

const { fixedHeader, sidebarLogo } = defaultSettings;

const state = {
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
};

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value;
        }
    }
};

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
