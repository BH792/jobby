import JobBoard from '../components/JobBoard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/JobActions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchJobs
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(JobBoard);
