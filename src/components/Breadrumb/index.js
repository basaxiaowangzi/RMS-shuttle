import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import './style.scss'
export default class index extends Component {
  render() {
    const {nameList = [],iconList = [], linkList = []} = this.props;
    return (
    <Breadcrumb>
     {
       nameList.map((item, idx)=>{
         return (
        <NavLink to={linkList[idx]} key={item}>
          <Breadcrumb.Item href="">
            {iconList.length >0 && <Icon type={iconList[idx]} />}
            <span>{item}</span>
          </Breadcrumb.Item>
       </NavLink>
         )
       })
     }
    </Breadcrumb>
    )
  }
}
