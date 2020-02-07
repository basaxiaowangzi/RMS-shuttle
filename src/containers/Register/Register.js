import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message,
  Radio
} from 'antd';
import api from 'api'
import './Register.scss'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'teacher',
    label: '教师',
  },
  {
    value: 'student',
    label: '学生',
  },
  {
    value: 'family',
    label: '家属',
  },
  {
    value: 'other',
    label: '校外人员',
  },
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 发请求注册
        api.registerInfo(values).then((data)=>{
          // 跳转到首页
          message.info('注册成功')
          this.props.history.push(`/login?phone=${values.phone}&password=${values.password}&channel=${values.channel}`)
        })
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  // handleWebsiteChange = value => {
  //   let autoCompleteResult;
  //   if (!value) {
  //     autoCompleteResult = [];
  //   } else {
  //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  //   }
  //   this.setState({ autoCompleteResult });
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '86',
    // })(
    //   <Select style={{ width: 70 }}>
    //     <Option value="86">+86</Option>
    //     <Option value="87">+87</Option>
    //   </Select>,
    // );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      <Form.Item
          label={
            <span>
              用户名&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        {/* <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请确认密码!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item> */}
        <Form.Item label="电话号码">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入电话号码!' }],
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="角色">
          {getFieldDecorator('role', {
            initialValue:'other'
          })(
            <Radio.Group>
              <Radio value="teacher">教师</Radio>
              <Radio value="student">学生</Radio>
              <Radio value="family">家属</Radio>
              <Radio value="other">校外人员</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="入口">
          {getFieldDecorator('channel', {
            initialValue:'1'
          })(
            <Radio.Group>
              <Radio value="1">客户端</Radio>
              <Radio value="2">后台</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register',mapPropsToFields(props){} })(RegistrationForm);

export default class Register extends Component {
  render() {
    return (
      <div className="register">
         <div className='register-div'>
          <h3>注&nbsp;&nbsp;册</h3>
         <WrappedRegistrationForm history={this.props.history}></WrappedRegistrationForm>
         </div>
      </div>
    )
  }
}

