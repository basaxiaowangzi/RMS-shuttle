
import React from 'react'

export default [
  {
    path: '/setpwd',
    component: React.lazy(() => import('src/containers/Login/Setpwd'))
  },
  {
    path: '/status',
    component: React.lazy(() => import('src/containers/Login/Status'))
  },
]
