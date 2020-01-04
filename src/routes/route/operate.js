import React from 'react'

export default [{
        path: '/operate/money',
        component: React.lazy(() =>
            import ('src/containers/operate/money'))
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