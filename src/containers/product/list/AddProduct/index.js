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
    isEdit: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        values.type = this.props.type;
        if(!this.props.isEdit){
          api.addEquipment(values).then((res)=>{
            console.log(res)
            if(res){
              message.success('新增器材成功！')
              this.props.close()
            }
          })
        }else{
          values.id = this.props.active.id;
          api.upDateBookInfo(values).then(res => {
            message.success('修改器材成功！')
            this.props.close();
          })
        }
        
      }
    });
  };
  // 时间控件显示与否
  timeShow = () => {
    this.setState({showTimePicker: !this.state.showTimePicker})
  }
  // 时间数组
  addTime = (time) => {
    console.log(time)
    let arr = this.state.timeArr
    arr.push(time)
    this.setState({
      timeArr: arr
    },()=>{
      this.props.form.setFieldsValue({reserverList:this.state.timeArr})
      console.log(this.state.timeArr)
    })
  }
  componentDidMount(){
    if(this.props.active.reserverList && this.props.active.reserverList.length > 0){
      this.setState({
        timeArr:[...this.props.active.reserverList],
        isEdit: this.props.isEdit
      })
    }
  }
  componentWillReceiveProps(np){
    if(np.active.reserverList && np.active.reserverList.length > 0){
      this.setState({
        timeArr:[...np.active.reserverList],
        isEdit: np.isEdit
      })
    }else{
      if(this.state.timeArr.length > 0){
        this.setState({
          isEdit: false,
          timeArr:[]
        })
      }
    }
  }
  render() {
    const { showTimePicker, timeArr } = this.state
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const {img, num, price, upStatus, title} = this.props.active;
    return (
      <div className='form-container'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="图片地址">
            {getFieldDecorator('img', {
              initialValue:img || '',
              rules: [{ required: true, message: '请输入图片地址！' }],
            })(<Input placeholder="请输入图片地址"/>)}
          </Form.Item>
          <Form.Item label="数量">
            {getFieldDecorator('num', {
              initialValue:num || '',
              rules: [{ required: true, message: '请输入数量！' }],
            })(<Input placeholder="请输入数量"/>)}
          </Form.Item>
          <Form.Item label="价格">
            {getFieldDecorator('price', {
              initialValue:price || '',
              rules: [{ required: true, message: '请输入价格！' }],
            })(<Input placeholder="请输入价格"/>)}
          </Form.Item>
          <Form.Item label="可预约时间">
            {getFieldDecorator('reserverList', {
              rules: [{ required: false, message: '请选择预约时间！' }],
            })(<span onClick={this.timeShow}>添加</span>)}
            {
              showTimePicker&&<div className='time-container'> 
              <TimeChange close={this.timeShow} addTime={this.addTime}/>
            </div>
            }
            {
              timeArr&& <i className='time-list'>{timeArr.toString()}</i>
            }
          </Form.Item>
          <Form.Item label="标题">
            {getFieldDecorator('title', {
              initialValue:title || '',
              rules: [{ required: true, message: '请输入标题！' }],
            })(<Input placeholder="请输入标题"/>)}
          </Form.Item>
          <Form.Item label="上下架">
            {getFieldDecorator('upStatus', {
              initialValue:upStatus || '',
              rules: [{ required: true, message: '请选择状态！' }],
            })(<Radio.Group>
              <Radio value="1">上架</Radio>
              <Radio value="2">下架</Radio>
            </Radio.Group>,)}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>

            <Button type="dashed" onClick={()=>{this.props.cancel()}}>
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

const WrappedDemo = Form.create({ name: 'validate_other' })(AddProduct);
export default WrappedDemo

