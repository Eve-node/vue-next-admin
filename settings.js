const env = process.env.NODE_ENV;

const title = {
    dev: '开发环境',
    qa: '测试环境',
    pro: ''
};

const port = {
    dev: '8888',
    qa: '8889',
    prod: '8890'
};

export default {
    // logo
    logo:
        'http://up.enterdesk.com/edpic/31/c3/fd/31c3fdc63511cabedd6415d121fa2d58.jpg',
    // ico
    ico:
        'http://up.enterdesk.com/edpic/31/c3/fd/31c3fdc63511cabedd6415d121fa2d58.jpg',
    // 标题
    title: `next - 后台管理系统`,
    // 环境
    cue: title[env],
    port: port[env],
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
