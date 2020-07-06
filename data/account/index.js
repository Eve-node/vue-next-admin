export default [
    {
        path: '/account',
        meta: { title: '用户资料系统', icon: 'account' },
        children: [
            {
                alias: '/account/store',
                path: 'store',
                meta: { title: '药店会员资料', icon: 'vip' }
            }
        ]
    }
];
