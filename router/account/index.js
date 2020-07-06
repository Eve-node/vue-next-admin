export default [
    {
        path: '/account',
        meta: { title: '用户资料系统', icon: 'account' },
        children: [
            {
                alias: '/account/staff',
                path: 'staff',
                meta: { title: '员工资料', icon: 'vip' }
            }
        ]
    }
];
