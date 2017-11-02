import React from 'react';
import MainApplication from '../containers/MainApplication';
import PublicHomepage from '../components/PublicHomepage';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'

const App = () => {
  return (
    <div className='APP'>
      <div className='APP-LOGO' style={{backgroundColor: 'lightblue'}}>JOBBY</div>
      <NavBar className='APP-NAV'/>
      <PublicHomepage />
      <Route path='/home' component={MainApplication} />
    </div>
  )
};

export default App;
