import React from 'react'
import { Skeleton, Icon, Spin } from 'antd'
const antIcon = <Icon type='loading' style={{ fontSize: 34, color: 'rgba(34, 34, 34, .5)' }} spin />

// 不需要增加控制权限的路由
const noAuthRoute = ['/login?back=true', '/login', '/loginchoose', '/logintransition', '/preference/invest', 'preference/company', '/auth/fill', '/status', '/auth/result', '/auth/no']

export function Loading () {
  return (
    <div style={{ padding: '22.5px' }}>
      <Skeleton active />
    </div>
  )
}

export default function Fallback () {
//   let hash = window.location.hash
//   if (hash) {
//     hash = hash.split('?')[0]
//   }
//   //   console.log('hash', hash)
//   const navPage = localStorage.getItem('navPage')
//   let flag = false
//   navPage !== '/' && noAuthRoute.forEach(item => {
//     const tmp = hash.replace('#', '')
//     // console.log('tmp', tmp)
//     if (tmp === item) {
//       flag = true
//     }
//   })
//   if (!flag) {
//     window.history.replaceState(null, '', `#/auth/no`)
//   }
  return (
    <Spin className={'Caic-Spin'} indicator={antIcon} tip={<div className='app-header'><h1></h1></div>} />
  )
}
