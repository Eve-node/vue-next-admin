import request from '@/utils/request';

class _C {
    /**
     * 用户列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static list(data) {
        return request({
            url: 'sso/basics/list',
            method: 'get',
            data
        });
    }

    /**
     * 用户下拉列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static listAboutManage(data) {
        return request({
            url: 'sso/basics/listAboutManage',
            method: 'get',
            data
        });
    }

    /**
     * 用户添加
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static add(data) {
        return request({
            url: 'sso/basics/add',
            method: 'post',
            data
        });
    }

    /**
     * 用户修改
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static update(data) {
        return request({
            url: 'sso/basics/update',
            method: 'post',
            data
        });
    }

    /**
     * 用户详情
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static detail(data) {
        return request({
            url: 'sso/basics/detail',
            method: 'post',
            data
        });
    }

    /**
     * 登录
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static login(data) {
        return request({
            url: 'sso/basics/wrlogin',
            method: 'post',
            data
        });
    }

    /**
     * 登录信息
     *
     * @static
     * @returns
     * @memberof _C
     */
    static info() {
        return request({
            url: 'sso/basics/info',
            method: 'get'
        });
    }

    /**
     * 退出登录
     *
     * @static
     * @returns
     * @memberof _C
     */
    static logout() {
        return request({
            url: 'sso/basics/logout',
            method: 'post'
        });
    }
}

export default _C;
