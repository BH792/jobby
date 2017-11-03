import JobBoard from '../components/JobBoard';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/JobActions'

const mapDispatchToProps = {
  fetchJobs
}

export default connect(null, mapDispatchToProps)(JobBoard);
