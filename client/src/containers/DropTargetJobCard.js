import JobCard from '../components/JobCard';
import { swapJobOrder } from '../actions/JobActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    swapJobOrder
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(JobCard)
