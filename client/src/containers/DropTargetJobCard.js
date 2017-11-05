import JobCard from '../components/JobCard';
import { swapJobOrder } from '../actions/DashBoardActions';
import { connect } from 'react-redux';

export default connect(null, { swapJobOrder })(JobCard)
