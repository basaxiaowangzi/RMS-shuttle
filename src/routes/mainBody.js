import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RouteData from './route'
import { Layout } from 'antd'
import Fallback from 'src/components/Fallback'
import { AppSider, AppHeader } from 'src/components/layout'
import './style.scss'

const { Header, Sider, Content } = Layout;

export default function componentMainBody () {
  return (
    <Layout className='app-container' style={{height: '100%'}}>
        <Header>
          <AppHeader />
        </Header>
        <Layout>
          <Sider>
          <AppSider/>
        </Sider>
        <Content>
          <React.Suspense fallback={Fallback}>
            <Switch>
              {
                RouteData.map(({ path, component }, key) => (
                  <Route path={path} component={component} key={'' + key} exact />
                ))
              }
            </Switch>
          </React.Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
