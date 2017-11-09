import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import CompanyItem from './CompanyItem'
import CompanyDetails from './CompanyDetails'
import CompanyForm from './CompanyForm'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ContentHeader } from '../../shared'
import { LoginRedirect } from '../../../containers/hocs/LoginRedirector';

class CompanyContent extends Component {
  render() {
    const { companies, match } = this.props
    let CompanyList = itemLister(CompanyItem, companies, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Company'}/>
        <Switch>
          <Route exact path={`${match.url}/new`} component={CompanyForm} />
          <Route exact path={`${match.url}/:id`} component={CompanyDetails} />
          <Route path={`${match.url}/:id/edit`} component={CompanyForm} />
        </Switch>
        <Route exact path={`${match.url}`} render={CompanyList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies.allIds.map(id => state.companies.byId[id])
  }
}

export default LoginRedirect(connect(mapStateToProps, {})(CompanyContent))
