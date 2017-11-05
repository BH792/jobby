import React from 'react';
import ConnectedJobBoard from '../containers/ConnectedJobBoard';
import JobContent from '../containers/JobContent';
import CompanyContent from '../containers/CompanyContent';
import ContactContent from '../containers/ContactContent';
import Sidebar from '../components/Sidebar';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/MainApplication.css'

const MainApplication = ({ userId, match }) => {
  if (!userId) {
    return <Redirect to={{
      pathname: '/',
      search: `?redirect=${encodeURIComponent(match.url)}`
    }} />
  }

  return (
    <div className='MainApplication'>
      <Route path={`${match.url}`} render={(props) => <Sidebar {...props} className='MainApplicationSide'/>}/>
      <Switch>
        <Route path={`${match.url}/jobs`} component={JobContent} />
        <Route path={`${match.url}/contacts`} component={ContactContent} />
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
