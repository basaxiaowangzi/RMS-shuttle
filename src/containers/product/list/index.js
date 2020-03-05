import React, { Component } from 'react'
import { Card, Pagination, Button, Modal, Avatar , message} from 'antd';
import { NavLink } from 'react-router-dom'
import { EditOutlined, FieldTimeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import Breadrumb from '../../../components/Breadrumb/index'
import WrappedDemo from './AddProduct/index'
import WrappedEdit from '../Components/EditProduct/index'
import api from 'api'
import './style.scss'

const { Meta } = Card;

const DEFAULTIMG = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2167964995,4117592449&fm=26&gp=0.jpg';
export default class list extends Component {
   state = {
     showAddModal:false,
     showBookModal: false,
     activeBookInfo: {}
   }
  showAdd = () => {
    this.setState({
      showAddModal:true
    })
  }
  showBookInfoModel= (info) => {
    this.setState({
      showBookModal: true,
      activeBookInfo: info
    })
  }
  handleOk = () => {
    this.setState({
      showAddModal:false
    })
    this.getProductList()
  }
  handleCancel = () => {
    this.setState({
      showAddModal:false
    })
  }
  handleBookOk =() => {
    this.setState({
      showBookModal: false
    })
    this.getProductList()
  }
  handleBookCancel =() => {
    this.setState({
      showBookModal:false
    })
  }
  getProductList=()=> {
      api.getProGrdList({type:'1'}).then((pro) => {
      this.setState({ProductList:pro})
    })
  }
  componentDidMount(){
    this.getProductList()
  }
  renderTimer(t) {
    var arr = t || [];
    return arr.map(a => <span key={+new Date() + a}>a</span>)
  }

  // 器材下架
  upOrDown(id, status) {
    if(status === '1'){
      status = '2'
    }else{
      status = '1'
    }
    api.upOrDown({id, status}).then(res => {
      var str = status === '1' ? '器材下架成功' : '器材上架成功'
      res && this.getProductList();
      res && message.success(str);
    })
  }
  render() {
    let {ProductList=[]} = this.state;
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
              <Card 
              title={item.title}
              cover={
                <img
                  alt={item.title}
                  src={item.img || DEFAULTIMG}
                  width="100px"
                  height="100px"
                />
              }
              actions={[
                <FieldTimeOutlined key="fieldtime" onClick={() => {this.showBookInfoModel(item)}}/>, //预约
                <ShoppingCartOutlined key="shopping" />  // 加入购物车
                ]}
               extra={ 
               <Button 
               type="primary" 
               shape='round'
               size='small'
               onClick={()=>{this.upOrDown(item.id, item.upStatus)}}
               style={{backgroundColor:item.upStatus === '2' ? 'green': 'red', borderColor:'#ccc'}}
               >{item.upStatus === '1' ? '下架': '上架'}</Button>  }
              style={{ width: 200 }}
              >
              <Meta
                    avatar={<Avatar src={item.img || DEFAULTIMG} />}
                    title={item.title}
                    description={item.title}
              />
              </Card>
            </div>
          )
        })
      }
     </div>

      {/* 新增器材  名称 图片  描述 价格*/}
      <Modal
          title="新增器材"
          visible={this.state.showAddModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
     >
         <WrappedDemo close={this.handleOk} type={'1'}></WrappedDemo>
      </Modal>

      {/* 修改预约信息*/}
      <Modal
          title="场地预约信息修改"
          visible={this.state.showBookModal}
          onOk={this.handleBookOk}
          onCancel={this.handleBookCancel}
          footer={null}
     >
         <WrappedEdit close={this.handleBookOk} cancel={this.handleBookCancel} active={this.state.activeBookInfo}></WrappedEdit>
      </Modal>
     
  </div>
    )
  }
}
