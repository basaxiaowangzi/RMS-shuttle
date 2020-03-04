import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const { SubMenu } = Menu;

function menu (props) {
  console.log(props.location.pathname);
  const Links = [
    {
      path: '/statistics',
      name: '系统统计',
      children: [
        {
          path: '/statistics/ground',
          name: '场地领用率统计',
          key: 1
        },
        {
          path: '/data-review/earn',
          name: '场馆收入统计',
          key: 2
        },
        {
          path: '/data-review/cost',
          name: '客户消费统计',
          key: 3
        },
        {
          path: '/statistics/userList',
          name: '用户列表',
          key: 17
        },
      ]
    },
    {
      path: '/info',
      name: '场馆基本信息设定',
      children: [
        {
          path: '/info/ground',
          name: '场地收费标准管理',
          key: 4
        },
        {
          path: '/info/time',
          name: '场地开放时间管理',
          key: 5
        },
        {
          path: '/info/holiday',
          name: '节假日设定',
          key: 6
        },
      ]
    },
    {
      path: '/member',
      name: '会员管理',
      children: [
        {
          path: '/member/set',
          name: '会员等级设置',
          key: 7
        },
        {
          path: '/member/update',
          name: '用户升级',
          key: 8
        },
      ]
    },
    {
      path: '/operate',
      name: '场地常用操作',
      children: [
        {
          path: '/operate/money',
          name: '用户收费处理',
          key: 9
        },
        {
          path: '/operate/bookGround',
          name: '预定场地',
          key: 10
        },
        {
          path: '/operate/check',
          name: '查看当前场地情况',
          key: 11
        },
        {
          path: '/operate/book',
          name: '即时预定',
          key: 12
        },
      ]
    },
    {
      path: '/permission',
      name: '权限设置',
      children: [
        {
          path: '/permission/role',
          name: '角色设置',
          key: 13
        },
        {
          path: '/permission/account',
          name: '账号设置',
          key: 14
        }
      ]
    },
    {
      path: '/product',
      name: '器材产品',
      children: [
        {
          path: '/product/list',
          name: '器材列表',
          key: 15
        },
        // {
        //   path: '/product/InOut',
        //   name: '器材上下架',
        //   key: 16
        // },
        {
          path: '/product/groundlist',
          name: '场地列表',
          key: 19
        },
      ]
    },
    {
      path: '/setting',
      name: '设置',
      children: [
        {
          path: '/setting/userInfo',
          name: '个人信息',
          key: 18
        }
      ]
    },
  ]
  const activeLink = Links.findIndex(({ path }) => path === props.location.pathname)
  return (
    <Menu
      defaultSelectedKeys={[''+activeLink]}
      mode="inline"
      theme="dark"
    >
      {
        Links.map((item, index) => (
          <SubMenu
          key={item.path}
          title={
            <span>
              {/* <Icon type="user" /> */}
              {item.name}
            </span>
          }
        >
          {
            item.children.map((items,index)=><Menu.Item key={items.key}><Link to={items.path} >{items.name}</Link></Menu.Item>)
          }
        </SubMenu>
        ))
      }
    </Menu>
  )
}

export default withRouter(menu)