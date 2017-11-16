import React from 'react';
import { DashboardContent } from '../modules/dashboard';
import { CompanyContent } from '../modules/companies';
import { ContactContent } from '../modules/contacts';
import { JobContent } from '../modules/jobs';
import { SearchContent } from '../modules/search';
import { TouchContent } from '../modules/touches';
import Sidebar from '../components/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginRedirect } from '../modules/shared'

const MainApplication = ({ userId, match }) => {
  return (
    <div className='MainApplication'>
      <Route path={`${match.url}`} render={(props) => <Sidebar {...props} className='MainApplicationSide'/>}/>
      <Switch>
        <Route path={`${match.url}/jobs`} component={JobContent} />
        <Route path={`${match.url}/contacts`} component={ContactContent} />
        <Route path={`${match.url}/companies`} component={CompanyContent} />
        <Route path={`${match.url}/search`} component={SearchContent} />
        <Route path={`${match.url}/touches`} component={TouchContent} />
        <Route path={`${match.url}`} component={DashboardContent} />
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
