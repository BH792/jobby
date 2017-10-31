import JobColumn from '../components/JobColumn';
import { changeJobStatus } from '../actions/JobActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state, ownProps) {
  const filteredJobs = []
  state.jobs.allIds.forEach(jobId => {
    if (state.jobs.byId[jobId].status === ownProps.status) {
      filteredJobs.push(state.jobs.byId[jobId])
    }
  })
  return {
    jobs: filteredJobs
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeJobStatus
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobColumn);
