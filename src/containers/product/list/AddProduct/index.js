import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Input
} from 'antd';
import './style.scss'


const { Option } = Select;

class AddProduct extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Plain Text">
          <span className="ant-form-text">China</span>
        </Form.Item>
        <Form.Item label="Select" hasFeedback>
          {getFieldDecorator('器材名称', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="器材名称"
            />,
          )}
        </Form.Item>
        

        <Form.Item label="Select[multiple]">
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="库存">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item>

        <Form.Item label="Rate">
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(<Rate />)}
        </Form.Item>

        <Form.Item label="图片上传" extra="上传产品图片">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>

          <Button type="dashed" onClick={()=>{}}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(AddProduct);
export default WrappedDemo

