import React from 'react'
import itemLister from '../components/hocs/Lister'
import CompanyItem from '../components/CompanyItem'
import CompanyDetails from '../containers/CompanyDetails'
import CompanyForm from '../containers/CompanyForm'
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom'

const CompanyContent = ({companies, match}) => {
  let CompanyList = itemLister(CompanyItem, companies, match)
  return (
    <div>
      <Link to={`${match.url}/new`}>Add New Company</Link>
      <Link to={`${match.url}`}>See All Companies</Link>
      <Switch>
        <Route exact path={`${match.url}/new`} component={CompanyForm} />
        <Route exact path={`${match.url}/:id`} component={CompanyDetails} />
        <Route path={`${match.url}/:id/edit`} component={CompanyForm} />
      </Switch>
      <Route exact path={`${match.url}`} component={CompanyList}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    companies: state.companies.allIds.map(id => state.companies.byId[id])
  }
}

export default connect(mapStateToProps, {})(CompanyContent)
