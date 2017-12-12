import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import JobItem from './JobItem'
import JobDetails from './JobDetails'
import JobForm from './JobForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { ContentHeader, SortBy } from '../../shared'
import { TouchForm } from '../../touches'
import { changeSort } from '../actions'
import * as selector from '../selectors';

class JobContent extends Component {
  render() {
    const { jobs, match, changeSort, sortBy } = this.props
    let JobList = itemLister(JobItem, jobs, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Job'}>
          <Route exact path={`${match.url}`} render={(props) => (
            <SortBy
              {...props}
              changeSort={changeSort}
              selectedOption={sortBy}
            />
          )}/>
        </ContentHeader>
        <Switch>
          <Route exact path={`${match.url}/new`} component={JobForm} />
          <Route exact path={`${match.url}/:id`} component={JobDetails} />
          <Route path={`${match.url}/:id/edit`} component={JobForm} />
          <Route path={`${match.url}/:id/touch`} component={TouchForm} />
        </Switch>
        <Route exact path={`${match.url}`} component={JobList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: selector.getSortedJobsWithCompany(state),
    sortBy: selector.getSortBy(state)
  }
}

export default connect(mapStateToProps, { changeSort })(JobContent);
