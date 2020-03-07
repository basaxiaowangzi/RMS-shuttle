import React from 'react'
import { clearToken } from '../../utils/token'

export default function Header(props) {

  function logout() {
    clearToken()
    window.history.replaceState(null, '', '/#/login')
    window.location.reload()
  }
    return (
      <>
        <div className='app-header flex justify-between'>
          <div className='title'>
              {/* <img src={require('./img/pic.png')}/> */}
              <span className='desc'>雨花羽毛球后台管理系统</span>
              <span className='logout' onClick={logout}>退出</span>
          </div>
        </div>
      </>
    )
}
