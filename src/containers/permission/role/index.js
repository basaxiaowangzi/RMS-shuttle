import React from 'react'
import Breadrumb from '../../../components/Breadrumb'
import { Button, Modal, Alert, Form, Icon, Input, Checkbox} from 'antd'
import './style.scss'
import RoleTable from './Table/index'
import  NewModal from './AddUserModal/index'
const { TextArea } = Input;
export default class role extends React.Component {
    
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        editvisible:false,
        confirmLoading: false,
        activeValue:{}
    }

    componentDidMount () {
        console.log('dddddd')
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
    }
    handleOk = (values) => {
        console.log(values)
        // 发请求 成功之后关闭模态框
        // this.setState({
        //   ModalText: 'The modal will be closed after two seconds',
        //   confirmLoading: true,
        // });
        // setTimeout(() => {
        //   this.setState({
        //     visible: false,
        //     confirmLoading: false,
        //   });
        // }, 2000);
    }
    edithandleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          editvisible: false,
        });
    }
    edithandleOk = (values) => {
        console.log(values)
        // 发请求 成功之后关闭模态框
        // this.setState({
        //   ModalText: 'The modal will be closed after two seconds',
        //   confirmLoading: true,
        // });
        // setTimeout(() => {
        //   this.setState({
        //     visible: false,
        //     confirmLoading: false,
        //   });
        // }, 2000);
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    showEditModal = (value) => {
        this.setState({
          editvisible: true,
          activeValue:value
        });
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div className='container'>
            {/* 面包屑导航 */}
            <Breadrumb nameList={['首页','角色列表']} linkList={['/','/permission/role']}></Breadrumb>
            {/* 添加角色按钮 */}
            <div className='addBtn'>
                <Button
                type='primary'
                size='large'
                shape='round'
                onClick={this.showModal}
                >添加角色</Button>
                {/* 添加角色对话框 */}
                <NewModal 
                footer={null}
                title="添加角色"
                visible={this.state.visible}
                handleCancel={this.handleCancel}
                handleOk={this.handleOk}></NewModal>
            </div>
            {/* 角色信息列表 */}
            <RoleTable
             showEditModal={this.showEditModal}
            ></RoleTable>
            {/* 修改角色 */}
            <NewModal 
                footer={null}
                title="修改角色"
                data={this.state.activeValue}
                visible={this.state.editvisible}
                handleCancel={this.edithandleCancel}
                handleOk={this.edithandleOk}>
            </NewModal>
            </div>
        
        )
    }
}

