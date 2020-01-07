import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/Login/Login'
import Register from '../containers/Register/Register'
import ViewMainBody from './mainBody'
import Fallback from 'src/components/Fallback'

const baseName = '/'

export default function Routes () {
  return (
    <React.Suspense fallback={Fallback}>
      <HashRouter basename={baseName}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' component={ViewMainBody} />
      </Switch>
    </HashRouter>
    </React.Suspense>
    
  )
}
