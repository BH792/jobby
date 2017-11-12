import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import JobItem from './JobItem'
import JobDetails from './JobDetails'
import JobForm from './JobForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { ContentHeader } from '../../shared'
import * as selector from '../selectors';

import touches from '../../touches'

class JobContent extends Component {
  render() {
    const { jobs, match } = this.props
    let JobList = itemLister(JobItem, jobs, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Job'}/>
        <Switch>
          <Route exact path={`${match.url}/new`} component={JobForm} />
          <Route exact path={`${match.url}/:id`} component={JobDetails} />
          <Route path={`${match.url}/:id/edit`} component={JobForm} />
          <Route path={`${match.url}/:id/touch`} component={touches.components.TouchForm} />
        </Switch>
        <Route exact path={`${match.url}`} component={JobList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: selector.getAllJobsWithCompany(state)
  }
}

export default connect(mapStateToProps, {})(JobContent);
