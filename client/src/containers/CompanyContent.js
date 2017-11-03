import React from 'react'
import itemLister from '../components/hocs/Lister'
import CompanyItem from '../components/CompanyItem'
import CompanyDetails from '../containers/CompanyDetails'
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom'

const CompanyContent = ({companies, match}) => {
  let CompanyList = itemLister(CompanyItem, companies, match)
  return (
    <div>
      <Link to={`${match.url}`}>See All</Link>
      <Switch>
        <Route path={`${match.url}/:id`} component={CompanyDetails} />
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
