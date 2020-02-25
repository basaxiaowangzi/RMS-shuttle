import React, { Component } from 'react'
import { Card, Pagination, Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom'
import Breadrumb from '../../../components/Breadrumb/index'
import WrappedDemo from './AddProduct/index'
import api from 'api'
import './style.scss'
export default class list extends Component {
   state = {
     currentPage:0,
     total:11,
     pageSize:5,
     showAddModal:false
   }
  onShowSizeChange = (current, pageSize) => {
    console.log(current,pageSize)
    this.setState({currentPage:current})
  }
  showAdd = () => {
    this.setState({
      showAddModal:true,
      ProductList: [],
      GroundList: []
    })
  }
  handleOk = () => {

  }
  handleCancel = () => {
    this.setState({
      showAddModal:false
    })
  }
  getProductList=()=> {
    Promise.all([
      api.getProGrdList({type:'1'}),
      api.getProGrdList({type:'2'})
    ]).then(([pro,gro]) => {
      console.log(pro,gro)
    })
  }
  componentDidMount(){
    this.getProductList()
  }
  render() {
    let {ProductList=[]} = this.state;
   const { currentPage, total, pageSize } = this.state;
    return (
  <div className="proList">
     <Breadrumb nameList={['首页','产品列表']} linkList={['/','/product/list']} ></Breadrumb>
     <div className="addProduct">
       <Button type="primary" onClick={this.showAdd}>新增器材</Button>
     </div>
      <div className="probox">
      {/* 产品列表 */}
      {
        ProductList.map((item, index) => {
          return (
            <div key={item.id} className="pro-item shadow">
              <Card title={item.name} extra={ <NavLink to={`/product/list/${item.id}`}>更多</NavLink>  } style={{ width: 300 }}>
                <img src={item.imgUrl} className="imgUrl" alt="" width="300" height="300"/>
               {/* 描述 */}
                <p>{item.desc} {item.id}</p>
                {/* 价格 */}
                <p>{item.desc} {item.id}</p>
              </Card>
            </div>
          )
        })
      }
     </div>
      {/* 分页 */}
      {/* <div className="pager">
      <Pagination
      showSizeChanger
      onShowSizeChange={this.onShowSizeChange}
      defaultCurrent={currentPage}
      total={total}
      />
      </div> */}

      {/* 新增器材  名称 图片  描述 价格*/}
      <Modal
          title="Basic Modal"
          visible={this.state.showAddModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <WrappedDemo></WrappedDemo>
      </Modal>

  </div>
    )
  }
}
