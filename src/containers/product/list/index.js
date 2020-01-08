import React, { Component } from 'react'
import { Card, Pagination } from 'antd';
import { NavLink } from 'react-router-dom'
import Breadrumb from '../../../components/Breadrumb/index'
import './style.scss'
export default class list extends Component {
   state = {
     currentPage:0,
     total:11,
     pageSize:5
   }
  onShowSizeChange = (current, pageSize) => {
    console.log(current,pageSize)
    this.setState({currentPage:current})
  }
  render() {
    let ProductList = [
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
    const { currentPage, total, pageSize } = this.state;
    console.log(pageSize)
   const newProductList = ProductList.slice((pageSize*( currentPage-1 ),pageSize*currentPage));
    return (
  <div className="proList">
     <Breadrumb nameList={['首页','产品列表']} linkList={['/','/product/list']} ></Breadrumb>
      <div className="probox">
      {/* 产品列表 */}
      {
        newProductList.map((item, index) => {
          return (
            <div key={item.id} className="pro-item shadow">
              <Card title={item.name} extra={ <NavLink to={`/product/list/${item.id}`}>更多</NavLink>  } style={{ width: 300 }}>
                <img src={item.imgUrl} className="imgUrl" alt="" width="300" height="300"/>
                <p>{item.desc} {item.id}</p>
              </Card>
            </div>
          )
        })
      }
     </div>
      {/* 分页 */}
      <div className="pager">
      <Pagination
      showSizeChanger
      onShowSizeChange={this.onShowSizeChange}
      defaultCurrent={currentPage}
      total={total}
      />
      </div>
  </div>
    )
  }
}
