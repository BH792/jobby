import JobColumn from './JobColumn';
import { changeJobStatus } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const filteredJobs = []
  state.jobs.allIds.forEach(jobId => {
    if (state.jobs.byId[jobId].status === ownProps.status) {
      filteredJobs.push({
        ...state.jobs.byId[jobId],
        company: state.companies.byId[state.jobs.byId[jobId].companyId].name
      })
    }
  })
  return {
    jobs: filteredJobs,
  };
};

export default connect(mapStateToProps, { changeJobStatus })(JobColumn);
