import request from '@/utils/request';

class _C {
    /**
     * 会员列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static list(data) {
        return request({
            url: 'sso/vip/list',
            method: 'get',
            data
        });
    }

    /**
     * 会员下拉列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static selectList() {
        return request({
            url: 'sso/vip/selectList',
            method: 'get'
        });
    }

    /**
     * 会员添加
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static add(data) {
        return request({
            url: 'sso/vip/add',
            method: 'post',
            data
        });
    }

    /**
     * 员工会员添加
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static addStaff(data) {
        return request({
            url: 'sso/vip/addStaff',
            method: 'post',
            data
        });
    }

    /**
     * 员工会员修改
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static updateStaff(data) {
        return request({
            url: 'sso/vip/updateStaff',
            method: 'post',
            data
        });
    }

    /**
     * 会员编辑
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static update(data) {
        return request({
            url: 'sso/vip/update',
            method: 'post',
            data
        });
    }

    /**
     * 会员详细
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static detail(data) {
        return request({
            url: 'sso/vip/detail',
            method: 'post',
            data
        });
    }

    /**
     * 药店会员列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static listAboutDrugStore(data) {
        return request({
            url: 'sso/vip/listAboutDrugStore',
            method: 'get',
            data
        });
    }

    /**
     * 员工会员列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static listAboutStaff(data) {
        return request({
            url: 'sso/vip/listAboutStaff',
            method: 'get',
            data
        });
    }
}

export default _C;
