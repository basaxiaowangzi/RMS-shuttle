import React from 'react'

export default [{
        path: '/statistics/ground',
        component: React.lazy(() =>
            import ('src/containers/statistics/ground'))
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