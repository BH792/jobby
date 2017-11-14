import JobColumn from './JobColumn';
import { changeJobStatus } from '../actions';
import { connect } from 'react-redux';
import * as selector from '../selectors'

function mapStateToProps(state, ownProps) {
  return {
    jobs: selector.mapJobsOfStatus(state, ownProps),
  };
};

export default connect(mapStateToProps, { changeJobStatus })(JobColumn);
