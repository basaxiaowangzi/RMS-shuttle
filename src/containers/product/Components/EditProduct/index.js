import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form,Select,Radio,Button,Input, message } from 'antd';
import api from 'api'
import TimeChange from '../../../../components/time'
import './style.scss'


const { Option } = Select;

class AddProduct extends React.Component {

  state={
    showTimePicker: false,
    timeArr: [],
    booKTimeArr: []
  }
  componentDidMount() {
    var id = this.props.active.id
    id && this.getBookTime(id);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        values.id = this.props.active.id
        this.startBook(values)
      }
    });
  };
  // 时间控件显示与否
  timeShow = () => {
    this.setState({showTimePicker: !this.state.showTimePicker})
  }
  // 时间数组
  addTime = (time) => {
    let arr = this.state.timeArr
    arr.push(time)
    this.setState({
      timeArr: arr
    },()=>{
      this.props.form.setFieldsValue({reserverList:this.state.timeArr})
      console.log(this.state.timeArr)
    })
  }
  startBook = (info) => {
    api.startBook(info).then(res=>{
      message.success('预约成功')
      this.props.close();
    })
  }

  // 获取预约时间
  getBookTime(id) {
    api.getReserverTime({id}).then(res => {
      this.setState({
        booKTimeArr: res || []
      })
    })
  }
  render() {
    const { showTimePicker, timeArr } = this.state
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const {active} = this.props;
    return (
      <div className='form-container'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="可预约时间"
            hasFeedback
          >
          {
            getFieldDecorator('reserverTime', {
              rules: [{ required: true, message: '请选择预约时间!'}],
            })( <Select placeholder='请选择预约时间'>
               {
                this.state.booKTimeArr.map(a => {
                   return (
                     <Option value={a} key={a}>{a}</Option> 
                   )
                 })
               }
            </Select>)
          }
          </Form.Item>
          <Form.Item label="数量">
            {getFieldDecorator('num', {
              rules: [{ required: false, message: '请选择数量!'}],
            })(<Input placeholder="请输入数量"/>)}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>

            <Button type="dashed" onClick={()=>{this.props.handleBookCancel()}}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedEdit = Form.create({ name: 'validate_other' })(AddProduct);
export default WrappedEdit

