import React from 'react'

export default [
    // 密码重置
    {
        path: '/setpwd',
        component: React.lazy(() =>
            import ('src/containers/SetPwd/SetPwd'))
    },
    {
        path: '/status',
        component: React.lazy(() =>
            import ('src/containers/Status/Status'))
    },
    // 登录
    {
        path: '/login',
        component: React.lazy(() =>
            import ('src/containers/Login/Login'))
    },
    {
        path: '/register',
        component: React.lazy(()=>
            import ('src/containers/Register/Register'))
    }
]