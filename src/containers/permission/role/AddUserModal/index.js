import React, { Component } from 'react';
import { Button, Modal, Alert, Form, Icon, Input, Checkbox} from 'antd'
// 添加用户
class AddUserModal extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleOk(values);
        this.props.form.resetFields();
      }
    });
  };
  componentDidMount(){
    const { data } = this.props;
    if(data){
      this.props.form.setFieldsValue({'rolename':data.name})
      this.props.form.setFieldsValue({'roledesc':data.desc})
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="addUser-form" >
        <Form.Item label="角色名称">
          {getFieldDecorator('rolename', {
            rules: [{ required: true, message: '请输入角色名称' }],
          })(
            <Input
            //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="角色名称"
            />,
          )}
        </Form.Item>
        <Form.Item label="角色描述">
          {getFieldDecorator('roledesc', {
            rules: [{ required: false, message: '请输入角色描述' }],
          })(
            <Input
            //   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="角色描述"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button  className="form-button-cancel" onClick={()=>{
            this.props.handleCancel();
            this.props.form.resetFields();
          }}>
            取消
          </Button>
          <Button type="primary" htmlType="submit" className="form-button-addUser">
            确定
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalAddUserForm = Form.create({ name: 'adduser_modal' })(AddUserModal);


export default class NewModal extends Component {
  render() {
    return (
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          footer={this.props.footer}
          confirmLoading
          onCancel={this.props.handleCancel}
          destroyOnClose
          >
          <WrappedNormalAddUserForm handleCancel={this.props.handleCancel} handleOk={this.props.handleOk} data={this.props.data}></WrappedNormalAddUserForm>
        </Modal>
    )
  }
}

