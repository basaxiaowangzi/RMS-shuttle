import React, { Component } from 'react'
import { Card, Pagination, Button, Modal, Avatar, message } from 'antd';
import { NavLink } from 'react-router-dom'
import Breadrumb from '../../../components/Breadrumb/index'
import WrappedDemo from '../list/AddProduct/index'
import WrappedEdit from '../Components/EditProduct/index'
import { EditOutlined, FieldTimeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import api from 'api'
import './style.scss'
const { Meta } = Card;

const DEFAULTIMG = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2167964995,4117592449&fm=26&gp=0.jpg';

export default class list extends Component {
   state = {
     showAddModal:false,
     showBookModal: false,
     groundList: [],
     activeBookInfo: {},
     editInfo: {},
     isEdit: false
   }
  showAdd = (item) => {
    if(item){
      this.setState({
        showAddModal:true,
        editInfo: item,
        isEdit: true
      })
    }else{
      this.setState({
        showAddModal:true
      })
    }
    
  }
  showBookInfoModel= (info) => {
    this.setState({
      showBookModal: true,
      activeBookInfo: info
    })
  }
  handleOk = () => {
    this.setState({
      showAddModal:false,
      isEdit: false,
      editInfo: {}
    })
    this.getGroundList()
  }
  handleCancel = () => {
    this.setState({
      showAddModal:false,
      isEdit: false,
      editInfo: {}
    })
  }
  handleBookOk =() => {
    this.setState({
      showBookModal: false
    })
    this.getGroundList()
  }
  handleBookCancel =() => {
    this.setState({
      showBookModal:false,
    })
  }
  getGroundList=()=> {
      api.getProGrdList({type:'2'}).then((gro) => {
      this.setState({groundList:gro})
    })
  }
  componentDidMount(){
    this.getGroundList();
  }
  renderTimer(t) {
    var arr = t || [];
    return arr.map(a => <span key={+new Date() + a}>a</span>)
  }
  // 或者场地预约时间
  getReserverTimer(id) {
    // 根据产品id获取产品预约时间
    api.getReserverTime({id}).then(res=>{
      console.log(res,'----->')
    })
  }
  upOrDown(id, status) {
    if(status === '1'){
      status = '2'
    }else{
      status = '1'
    }
    api.upOrDown({id, status}).then(res => {
      var str = status === '1' ? '场地下架成功' : '场地上架成功'
      res && this.getGroundList();
      res && message.success(str);
    })
  }

  render() {
    let {groundList=[]} = this.state;
    return (
  <div className="proList">
     <Breadrumb nameList={['首页','场地列表']} linkList={['/','/product/groundList']} ></Breadrumb>
     <div className="addProduct">
       <Button type="primary" onClick={this.showAdd}>新增场地</Button>
     </div>
      <div className="probox">
      {/* 产品列表 */}
      {
        groundList.map((item, index) => {
          return (
            <div key={item.id} className="pro-item shadow">
            <Card 
              title={item.title}
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.img || DEFAULTIMG}
                  width="100px"
                  height="100px"
                />}
               actions={[
                <div onClick={() => {this.showBookInfoModel(item)}}>
                  <FieldTimeOutlined key="fieldtime" />
                  <span style={{fontSize:'12px', marginLeft: '6px'}}>预约</span>
                </div>,
                <div onClick={() => {this.showAdd(item)}}>
                  <ShoppingCartOutlined key="shopping" /> 
                  <span style={{fontSize:'12px', marginLeft: '6px'}}>加入购物车</span>
                </div>
                ]}
               extra={ 
               <Button 
               type="primary" 
               shape='round'
               size='small'
               onClick={()=>{this.upOrDown(item.id, item.upStatus)}}
               style={{backgroundColor:item.upStatus === '1' ? 'green': 'red', borderColor:'#ccc'}}
               >{item.upStatus === '2' ? '已下架': '已上架'}</Button>  } 
               style={{ width: 200, backgroundColor:'#ccc'}
               }
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
          title={this.state.isEdit && '修改场地信息' || "新增场地"}
          visible={this.state.showAddModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
     >
         <WrappedDemo close={this.handleOk} cancel={this.handleCancel} type={'2'} active={this.state.editInfo} isEdit={this.state.isEdit}></WrappedDemo>
      </Modal>

      {/* 修改预约信息*/}
      <Modal
          title="场地预约"
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
