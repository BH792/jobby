import JobBoard from '../components/JobBoard';
import { connect } from 'react-redux';
import { fetchBoard } from '../actions/DashBoardActions'

const mapDispatchToProps = {
  fetchBoard
}

export default connect(null, mapDispatchToProps)(JobBoard);
