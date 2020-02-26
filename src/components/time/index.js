import React, { Component } from 'react'
import { TimePicker, message } from 'antd'
import moment from 'moment';

export default class TimeChange extends Component {

  state={ 
        start: '',
        end: ''
  }
  // 时间控件
  onChange = (time,timeString,type) => {
    this.setState({
        [type]: timeString
    })
  }
  onOpenChange = (e) => {
    if(!e){
        if(this.state.start && this.state.end){
            let str = this.state.start + '-' +  this.state.end
            this.props.addTime(str)
            this.props.close()
            this.setState({
                start: '',
                end: ''
            })
        }
    }
  }
    render () {
        return <>
                <TimePicker placeholder='开始时间' onOpenChange={this.onOpenChange} onChange={(time,timeString)=>{this.onChange(time,timeString,'start')}} defaultOpenValue={moment('0:0:0', 'H:m:s')} />
                <TimePicker placeholder='结束时间' onOpenChange={this.onOpenChange} onChange={(time,timeString)=>{this.onChange(time,timeString,'end')}} defaultOpenValue={moment('0:0:0', 'H:m:s')} />
                </>
    }
}