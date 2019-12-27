import React from 'react'
import {
  AppMenu
} from './index'
import { ReactComponent as BrandSvg } from './icon.svg'

export default function Header(props) {
  return (
    <div className='app-sider'>
      <div className='app-brand' style={{color:'#fff'}}>
        菜单
      </div>
      <div className='app-menu'>
        <AppMenu />
      </div>
    </div>
  )
}