

import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Form, Col ,Input , Button, message} from 'antd'
import api from 'api'
import { setToken } from '../../utils/token'
import './Login.scss'

class Login extends  React.Component {


  state = {
  };

  componentDidMount () {
    if(window.location.href.split('?')[1]){
      const token = window.location.href.split('?')[1].split('=')[1] || ''
      setToken(token)
    }    
  }

  // 邮箱重制密码
  loginSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(['username','password'], (err, values) => {
      if (!err) {
          let params = {
            username: values.username,
            password: values.password
          }
          api.loginforEmail( params )
          .then((data) => {
            if(data){
              message.success('密码设置成功！')
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
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login-forgetpwd'>
            <div className='forgetpwd-div'>
              <h3>登录</h3>
              <React.Fragment>
                {/* <p>重置密码并确认即可完成密码重置</p> */}
                <Form onSubmit={this.loginSubmit} >
                  <Form.Item >
                    <div className="input-btn-div">
                      <Col span={24} >
                        {getFieldDecorator('username', {
                          rules: [
                            { required: true, message: '请输入用户名' },
                            {/* {
                              validator: this.validateToNextUserName,
                            },
                            { pattern: /^[0-9a-zA-Z]{6,16}$/, message: '请输入6~16位数字或字母组合'}, */}
                          ],
                        })(
                          <Input
                            prefix={<img src={require('../../assets/password.svg')} alt=''/>}
                            placeholder='请输入用户名'
                          />
                        )}
                      </Col>
                    </div>
                    </Form.Item>
                    <Form.Item>
                    <div className="input-btn-div">
                      <Col span={24} >
                        {getFieldDecorator('password', {
                          rules: [
                            { required: true, message: '请输入密码' }
                          ],
                        })(
                          <Input
                            prefix={<img src={require('../../assets/password.svg')} alt='' />}
                            placeholder='请输入密码'
                          />
                        )}
                      </Col>
                    </div>
                    </Form.Item>
                    <div className="other">
                    <div className="forgetPassword"><Link to="/SetPwd">忘记密码</Link></div>
                    <div className="register">没有账号？<Link to="/register">立即注册</Link></div>

                    </div>
                    <div className="input-btn-div submit-btn">
                      <Button
                          type='primary'
                          htmlType='submit'
                          className='login-form-button'
                        >
                         提交 
                        </Button>
                    </div>
                </Form>
              </React.Fragment>               
            </div>
      </div>
    )
  }
}

export default Form.create()(Login)
