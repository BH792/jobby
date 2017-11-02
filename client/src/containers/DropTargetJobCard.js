import JobCard from '../components/JobCard';
import { swapJobOrder } from '../actions/JobActions';
import { connect } from 'react-redux';

export default connect(null, { swapJobOrder })(JobCard)
