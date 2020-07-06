import account from './account/index';
export default [
    {
        path: '/',
        meta: { title: '数据系统管理', icon: 'example' },
        children: [
            {
                alias: '/',
                path: '',
                meta: { title: '数据系统管理', icon: 'example' }
            }
        ]
    },
    ...account
];
