import React from 'react';
import dashboard from '../modules/dashboard';
import companies from '../modules/companies';
import contacts from '../modules/contacts';
import jobs from '../modules/jobs';
import search from '../modules/search';
import touches from '../modules/touches';
import Sidebar from '../components/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginRedirect } from '../modules/shared'
import '../styles/MainApplication.css'


const MainApplication = ({ userId, match }) => {
  return (
    <div className='MainApplication'>
      <Route path={`${match.url}`} render={(props) => <Sidebar {...props} className='MainApplicationSide'/>}/>
      <Switch>
        <Route path={`${match.url}/jobs`} component={jobs.JobContent} />
        <Route path={`${match.url}/contacts`} component={contacts.ContactContent} />
        <Route path={`${match.url}/companies`} component={companies.CompanyContent} />
        <Route path={`${match.url}/search`} component={search.SearchContent} />
        <Route path={`${match.url}/touches`} component={touches.TouchContent} />
        <Route path={`${match.url}`} component={dashboard.DashboardContent} />
      </Switch>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    userId: state.user.id
  }
}

export default LoginRedirect(
  withRouter(connect(mapStateToProps, {})(MainApplication))
);
