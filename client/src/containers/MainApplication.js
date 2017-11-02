import React from 'react';
import JobContainer from '../containers/JobContainer';
import Sidebar from '../components/Sidebar';
import ConnectedLogin from '../containers/ConnectedLogin';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/MainApplication.css'

const MainApplication = ({ userId, match }) => {
  // if (!userId) {
  //   return <Redirect to='/' />
  // }

  return (
    <div className='MainApplication'>
      <Sidebar className='MainApplicationSide'/>
      <Switch>
        <Route path={`${match.url}/jobs`} component={JobContainer} />
        <Route path={`${match.url}/contacts`} render={() => <div>contacts</div>} />
        <Route path={`${match.url}/companies`} render={() => <div>companies</div>} />
        <Route path={`${match.url}`} component={() => <div>home</div>} />
      </Switch>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    userId: state.user.id
  }
}

export default withRouter(connect(mapStateToProps, {})(MainApplication))
