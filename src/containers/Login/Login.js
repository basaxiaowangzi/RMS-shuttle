

import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Form, Col ,Input , Button, message, Icon, Checkbox, Radio} from 'antd'
import api from 'api'
import { setToken } from '../../utils/token'
import './Login.scss'

class Login extends  React.Component {
  // 邮箱重制密码
  loginSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(['phone','password','channel'], (err, values) => {
      if (!err) {
          let params = {
            phone: values.phone,
            password: values.password,
            channel:values.channel
          }
          api.loginforEmail( params )
          .then((data) => {
            if(data){
              message.success('登录成功！')
              window.localStorage.setItem('userInfo', JSON.stringify(params))
              setToken(data.token)
              this.props.history.push('/')
            }
          })
          .catch((error) => {
            console.log(error)
          })    
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const res = this.props.location.search.slice(1).split('&');
    return (
      <div className='login-forgetpwd'>
            <div className='forgetpwd-div'>
              <h3>登录</h3>
              <React.Fragment>
                {/* <p>重置密码并确认即可完成密码重置</p> */}
                <Form onSubmit={this.loginSubmit} className="login-form">
                  <Form.Item>
                    {getFieldDecorator('phone', {
                      initialValue:res[0]&&res[0].split('=')[1] || '',
                      rules: [{ required: true, message: '请输入手机号' }],
                    })(
                      <Input
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="手机号"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      initialValue:res[1]&&res[1].split('=')[1] || '',
                      rules: [{ required: true, message: '请输入密码' }],
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('channel', {
                      initialValue:res[2]&&res[2].split('=')[1] || '1',
                      rules: [{ required: true, message: '入口' }],
                    })(
                      <Radio.Group>
                      <Radio value="1">客户端</Radio>
                      <Radio value="2">后台</Radio>
                    </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登录
                    </Button>
                  </Form.Item>
                  <Button type="link" href="#/register" block>
                      立即注册
                  </Button>
        </Form>
              </React.Fragment>               
            </div>
      </div>
    )
  }
}

export default Form.create()(Login)
