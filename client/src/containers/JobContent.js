import React from 'react'
import itemLister from '../components/hocs/Lister'
import JobItem from '../components/JobItem'
import JobDetails from '../containers/JobDetails'
import JobForm from '../containers/JobForm'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

const JobContent = ({jobs, companies, match}) => {
  let JobList = itemLister(JobItem, jobs, match)
  return (
    <div>
      <Link to={`${match.url}/new`}>Add New Job</Link>
      <Link to={`${match.url}`}>See All Jobs</Link>
      <Switch>
        <Route exact path={`${match.url}/new`} component={JobForm} />
        <Route exact path={`${match.url}/:id`} component={JobDetails} />
        <Route path={`${match.url}/:id/edit`} component={JobForm} />
      </Switch>
      <Route exact path={`${match.url}`} component={JobList}/>
    </div>
  )
}

function mapStateToProps(state) {
  const jobs = state.jobs.allIds.map(jobId => {
    return {
      ...state.jobs.byId[jobId],
      company: state.companies.byId[state.jobs.byId[jobId].companyId].name
    }
  })
  return {
    jobs,
    companies: state.companies.allIds.map(id => state.companies.byId[id])
  }
}

export default connect(mapStateToProps, {})(JobContent)
