import React from 'react'
import success from '../Login/assets/success.png'

export default class Status extends React.Component {

  state = {
    data: {
      code: '1',
      title: '登录密码设置成功，可在桌面运用登录操作！',
      content: '温馨提示：为保证您的数据安全，请下载桌面运用进行登录！',
      link: 'https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi',
      url: success,
      btn: '下载桌面运用'
    }
  }

  componentDidMount() {
    localStorage.removeItem('EJU_evaluation_TOKEN')
  }

  render() {
    const { data } = this.state
    return (
      <div className='status-container'>
        <div className='content'>
          <div style={{ marginBottom: 30 }}>
            <img src={data.url} />
          </div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <div className='bottom-btn'>
            <span><a href={data.link}>{data.btn}</a></span>
          </div>
        </div>
      </div>
    )
  }
}