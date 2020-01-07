import React, { Component } from 'react'
import { Card } from 'antd';
import { NavLink } from 'react-router-dom'
import './style.scss'
export default class list extends Component {
  
  render() {
    const ProductList = [
      {id:'01',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'02',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'03',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'04',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'05',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'06',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'07',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'08',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'09',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'10',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
      {id:'11',name:'产品1',imgUrl:'../../../assets/login-picture/setPwd.png',desc:'哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵呵呵'},
    ];
    return (
      <div className="probox">
      {
        ProductList.map((item, index) => {
          return (
            <div key={item.id} className="pro-item">
              <Card title={item.name} extra={ <NavLink to={`/product/list/${item.id}`}>更多</NavLink>  } style={{ width: 300 }}>
                <img src={item.imgUrl} className="imgUrl" alt="" width="300" height="300"/>
                <p>{item.desc}</p>
              </Card>
            </div>
          )
        })
      }
      
    </div>
    )
  }
}
