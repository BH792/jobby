import App from '../components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchJobs } from '../actions/JobActions'
import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'

function mapStateToProps(state) {
  return{
    jobs: state.jobs
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchJobs: JobbyBackendAdapter.fetchJobs
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
