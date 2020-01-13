import React from 'react'

export default [
    {
        path: '/setting/userInfo',
        component: React.lazy(() =>
            import ('src/containers/Setting/UserInfo'))
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