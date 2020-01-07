import React from 'react'
import { Skeleton, Icon, Spin } from 'antd'
const antIcon = <Icon type='loading' style={{ fontSize: 34, color: 'rgba(34, 34, 34, .5)' }} spin />

export function Loading () {
  return (
    <div style={{ padding: '22.5px' }}>
      <Skeleton active />
    </div>
  )
}

export default function Fallback () {
  return (
    <Spin className={'Caic-Spin'} indicator={antIcon} tip={<div className='app-header'><h1>内容加载中...</h1></div>} />
  )
}
