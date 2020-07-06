import accountCustomer from '@/api/account/basics';
import { getToken, setToken, removeToken } from '@/utils/auth';
import routes from '@/router';
const state = {
    token: getToken(),
    name: '',
    avatar: '',
    permissionsName: '',
    // 0 普通用户、1 操作员、2 管理员、3 超级管理员
    permissions: 0,
    routes: [],
    isFinishLoad: false,
    tel: ''
};

const mutations = {
    /**
     * 设置token
     *
     * @param {*} state
     * @param {*} token
     */
    SET_TOKEN(state, token) {
        state.token = token;
    },
    /**
     * 设置用户名称
     *
     * @param {*} state
     * @param {*} name
     */
    SET_NAME(state, name) {
        state.name = name;
    },
    /**
     * 设置用户头像
     *
     * @param {*} state
     * @param {*} avatar
     */
    SET_AVATAR(state, avatar) {
        state.avatar = avatar;
    },
    /**
     * 设置权限名称
     *
     * @param {*} state
     * @param {*} val
     */
    Set_Permissions_Name(state, val) {
        state.permissionsName = val;
    },
    /**
     * 设置权限
     *
     * @param {*} state
     * @param {*} val
     */
    Set_Permissions(state, val) {
        state.permissions = val;
    },
    /**
     * 设置路由
     *
     * @param {*} state
     * @param {*} val
     */
    Set_Routes(state, val) {
        state.routes = val;
    },
    /**
     * 设置loading加载
     *
     * @param {*} state
     * @param {*} val
     */
    Set_Finish_Load(state, val) {
        state.isFinishLoad = val;
    },
    /**
     * 手机号
     *
     * @param {*} state
     * @param {*} val
     */
    SET_TEL(state, val) {
        state.tel = val;
    }
};

const actions = {
    /**
     * 登录
     *
     * @param {*} { commit }
     * @param {*} params
     * @returns
     */
    login({ commit }, params) {
        return new Promise((resolve, reject) => {
            accountCustomer
                .login(params)
                .then(res => {
                    commit('SET_TOKEN', res.token);
                    setToken(res.token);
                    console.log(res.token);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    /**
     * 获取用户信息
     *
     * @param {*} { commit, state }
     * @returns
     */
    getInfo({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            accountCustomer
                .info()
                .then(res => {
                    if (!process.client) {
                        return false;
                    }
                    commit('SET_NAME', '小明');
                    commit(
                        'SET_AVATAR',
                        'http://up.enterdesk.com/edpic/31/c3/fd/31c3fdc63511cabedd6415d121fa2d58.jpg'
                    );
                    commit('SET_TEL', 'xxxx');

                    // 超级管理员
                    commit('Set_Routes', routes);

                    commit('Set_Finish_Load', true);
                    resolve(res);
                })
                .catch(error => {
                    commit('Set_Finish_Load', true);
                    reject(error);
                });
        });
    },

    /**
     * 退出登录
     *
     * @param {*} { commit, state }
     * @returns
     */
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            // 如果没有token，直接退出
            if (!state.token) {
                commit('SET_TOKEN', '');
                commit('SET_NAME', '');
                removeToken();
                $nuxt.$router.replace({
                    path: '/login'
                });
                resolve();
                return false;
            }
            accountCustomer
                .logout()
                .then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_NAME', '');
                    removeToken();
                    $nuxt.$router.replace({
                        path: '/login'
                    });
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    /**
     * 清除token
     *
     * @param {*} { commit }
     * @returns
     */
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            removeToken();
            resolve();
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
