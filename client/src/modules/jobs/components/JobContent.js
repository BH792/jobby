import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import JobItem from './JobItem'
import JobDetails from './JobDetails'
import JobForm from './JobForm'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchJobs } from '../actions'

class JobContent extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const { jobs, match } = this.props
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
}

function mapStateToProps(state) {
  const jobs = state.jobs.allIds.map(jobId => {
    return {
      ...state.jobs.byId[jobId],
      company: state.companies.byId[state.jobs.byId[jobId].companyId].name
    }
  })
  return {
    jobs
  }
}

export default connect(mapStateToProps, { fetchJobs })(JobContent)
