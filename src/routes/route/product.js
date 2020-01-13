import React from 'react'

export default [{
        path: '/product/list',
        component: React.lazy(() =>
            import ('src/containers/product/list'))
    },
    {
        path: '/product/groundlist',
        component: React.lazy(() =>
            import ('src/containers/product/groundList'))
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