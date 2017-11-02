import React from 'react';
import MainApplication from '../containers/MainApplication';
import PublicHomepage from '../containers/PublicHomepage';
import NavBar from '../components/NavBar';
import ConnectedNavBar from '../containers/ConnectedNavBar';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'

const App = () => {
  return (
    <div className='APP'>
      <div className='APP-LOGO' style={{backgroundColor: 'lightblue'}}>JOBBY</div>
      {/* <NavBar className='APP-NAV'/> */}
      <ConnectedNavBar className='APP-NAV'/>
      <PublicHomepage />
      <Route path='/home' component={MainApplication} />
    </div>
  )
};

export default App;
