import React from 'react';
import MainApplication from '../containers/MainApplication';
import PublicHomepage from '../containers/PublicHomepage';
import ConnectedNavBar from '../containers/ConnectedNavBar';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'

const App = () => {
  return (
    <div className='APP'>
      <div className='APP-LOGO' style={{backgroundColor: 'lightblue'}}>JOBBY</div>
      <ConnectedNavBar className='APP-NAV'/>
      <Switch>
        <Route path='/home' component={MainApplication} />
        <Route path='/' component={PublicHomepage} />
      </Switch>
    </div>
  )
};

export default App;
