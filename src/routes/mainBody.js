import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RouteData from './route'
import { Layout } from 'antd'
// import { Loading } from '../components/Fallback';
// import { Loading as Fallback } from 'src/components/fallback'
import { AppSider, AppHeader } from 'src/components/layout'

const { Header, Sider, Content } = Layout;

export default function componentMainBody () {
  return (
    <Layout className='app-container' style={{height: '950px'}}>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Layout>
          <Sider>
          <AppSider />
        </Sider>
        <Content>
          <React.Suspense fallback={ <div>loading</div> }>
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
    </Layout>
  )
}
