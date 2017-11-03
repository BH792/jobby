import React from 'react';
import ConnectedJobBoard from '../containers/ConnectedJobBoard';
import JobContent from '../containers/JobContent';
import CompanyContent from '../containers/CompanyContent';
import Sidebar from '../components/Sidebar';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/MainApplication.css'

const MainApplication = ({ userId, match }) => {
  if (!userId) {
    return <Redirect to='/' />
  }

  return (
    <div className='MainApplication'>
      <Sidebar className='MainApplicationSide'/>
      <Switch>
        <Route path={`${match.url}/jobs`} component={JobContent} />
        <Route path={`${match.url}/contacts`} render={() => <div>contacts</div>} />
        <Route path={`${match.url}/companies`} component={CompanyContent} />
        <Route path={`${match.url}`} component={ConnectedJobBoard} />
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
