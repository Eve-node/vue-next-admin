import request from '@/utils/request';

class _C {
    /**
     * 体测列表
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static list(data) {
        return request({
            url: 'sso/physical/list',
            method: 'get',
            data
        });
    }

    /**
     * 体测修改
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static update(data) {
        return request({
            url: 'sso/physical/update',
            method: 'post',
            data
        });
    }

    /**
     * 体测添加
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static add(data) {
        return request({
            url: 'sso/physical/add',
            method: 'post',
            data
        });
    }

    /**
     * 体测删除
     *
     * @static
     * @param {*} data
     * @returns
     * @memberof _C
     */
    static remove(data) {
        return request({
            url: 'sso/physical/remove',
            method: 'post',
            data
        });
    }
}

export default _C;
