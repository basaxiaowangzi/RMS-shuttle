import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import SetPwd from '../containers/Login/Setpwd'
import Status from '../containers/Login/Status'
import { getToken,getWeChatToken } from 'src/utils/token'
import RouteData from './route'
import Fallback from 'src/components/Fallback'
import { getQueryValueByName } from '../utils/utils'

const baseName = '/'

export default function Routes () {
  React.useEffect(() => {
    if (getToken() || getWeChatToken() || getQueryValueByName(this.props.location.search, 'requestId')) {
  
    }else{
      window.location.href = '#/setpwd'
    }
  }, [])
  return (
    <React.Suspense fallback={Fallback}>
      <HashRouter basename={baseName}>
      <Switch>
        <Redirect exact from={'/'} to='/setpwd' />
        <Route path='/setpwd' component={SetPwd} />
        <Route path='/status' component={Status} />
        {
          RouteData.map(({ path, component }, key) => (
            <Route path={path} component={component} key={'' + key} exact />
          ))
        }
      </Switch>
    </HashRouter>
    </React.Suspense>
    
  )
}
