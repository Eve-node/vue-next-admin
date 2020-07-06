let env = process.env.NODE_ENV;

let title = {
    dev: '开发环境',
    qa: '测试环境',
    pro: ''
};

export default {
    // 标题
    title: `XX - 后台管理系统`,
    // 环境
    cue: title[env],
    // 版本
    version: '0.0.1',

    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: true,

    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: true
};
