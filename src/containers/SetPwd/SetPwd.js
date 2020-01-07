

import React from 'react'
import { Form, Col ,Input , Button, message} from 'antd'
import api from 'api'
import { setToken } from '../../utils/token'
import './SetPwd.scss'

class SetPwd extends  React.Component {


  state = {
  };

  componentDidMount () {
    if(window.location.href.split('?')[1]){
      const token = window.location.href.split('?')[1].split('=')[1] || ''
      setToken(token)
    }    
  }

  // 邮箱重制密码
  sendpwf = (e) => {
    e.preventDefault()
    this.props.form.validateFields(['password','confirm'], (err, values) => {
      if (!err) {
          let params = {
            password: values.password,
          }
          api.loginforEmail( params )
          .then((data) => {
            if(data){
              message.success('密码设置成功！')
              this.props.history.push('/status')
            }
          })
          .catch((error) => {
            console.log(error)
          })    
      }
    })
  }


  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两次密码不一致');
    } else {
      callback();
    }
  };

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login-forgetpwd'>
            <div className='forgetpwd-div'>
              <h3>密码重置</h3>
              <React.Fragment>
                {/* <p>重置密码并确认即可完成密码重置</p> */}
                <Form onSubmit={this.sendpwf} >
                  <Form.Item >
                    <div className="input-btn-div">
                      <Col span={24} >
                        {getFieldDecorator('password', {
                          rules: [
                            { required: true, message: '请输入新密码' },
                            {
                              validator: this.validateToNextPassword,
                            },
                            { pattern: /^[0-9a-zA-Z]{6,16}$/, message: '请输入6~16位数字或字母组合'},
                          ],
                        })(
                          <Input.Password
                            prefix={<img src={require('../../assets/password.svg')} alt=''/>}
                            placeholder='请输入6~16位数字或字母组合'
                          />
                        )}
                      </Col>
                    </div>
                    </Form.Item>
                    <Form.Item>
                    <div className="input-btn-div">
                      <Col span={24} >
                        {getFieldDecorator('confirm', {
                          rules: [
                            { required: true, message: '请再次输入新密码' },
                            {
                              validator: this.compareToFirstPassword,
                            },
                          ],
                        })(
                          <Input.Password onBlur={()=>this.handleConfirmBlur}
                            prefix={<img src={require('../../assets/password.svg')} alt='' />}
                            placeholder='请再次输入新密码'
                          />
                        )}
                      </Col>
                    </div>
                    </Form.Item>
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

export default Form.create()(SetPwd)
