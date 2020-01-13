import React from 'react'

export default [
    // 场地领用率
    {
        path: '/statistics/ground',
        component: React.lazy(() =>
            import ('src/containers/statistics/ground'))
    },
    {
        path: '/statistics/userList',
        component: React.lazy(() =>
            import ('src/containers/statistics/userList'))
    },
    // {
    //     path: '/data-review/earn',
    //     component: React.lazy(() =>
    //         import ('src/containers/Login/Setpwd'))
    // },
    // {
    //     path: '/data-review/cost',
    //     component: React.lazy(() =>
    //         import ('src/containers/Login/Status'))
    // },
]