import React from 'react'
import { Icon, Avatar, Tooltip } from 'antd'
import { clearToken, toLogin, getUserInfo } from 'src/utils/token'
// import LocalhostService from 'render/api-request/localhostService'

const Operation = (props) => {
  const item = [
    {
      icon: 'download',
      name: '下载证书',
      onClick: () => {
        props.setShowPasswordDiag(true)
      }
    },
    {
      icon: 'logout',
      name: '登出',
      onClick: () => {
        clearToken()
        toLogin()
      }
    },
    {
      icon: 'redo',
      name: '刷新',
      onClick: () => {
        window.location.reload()
      }
    }
  ]
  return (
    <>
      {
        item.map((item, index) => (
          <Tooltip key={'' + index}
            placement='bottom'
            title={item.name}
          >
            <Icon type={item.icon} className='pointer' onClick={() => item.onClick && item.onClick()}/>
          </Tooltip>
        ))
      }
    </>
  )
}

export default function Header(props) {
  const [showPasswordDiag, setShowPasswordDiag] = React.useState(false)
  const info = getUserInfo()
    return (
      <>
        <div className='app-header flex justify-between'>
          <div className='text1'>
          {info && info.loginAccount && info.loginAccount.enterpriseName || '--'}
          </div>
          <div className='flex'>
            <div>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              {info && info.loginAccount && info.loginAccount.email}
            </div>
            <div className='edit'>
              <Operation setShowPasswordDiag={setShowPasswordDiag}/>
            </div>
          </div>
        </div>
      </>
    )
}
