import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import ContentHeader from './ContentHeader'
import JobItem from './JobItem'
import JobDetails from './JobDetails'
import JobForm from './JobForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchJobsAPI } from '../actions'

import { LoginRedirect } from '../../../containers/hocs/LoginRedirector';

class JobContent extends Component {
  // componentDidMount() {
  //   this.props.fetchJobsAPI()
  // }

  render() {
    const { jobs, match, location } = this.props
    let JobList = itemLister(JobItem, jobs, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} location={location} type={'Job'}/>
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

export default LoginRedirect(connect(mapStateToProps, { fetchJobsAPI })(JobContent))
