import JobBoard from './JobBoard';
import { connect } from 'react-redux';
import { fetchBoard } from '../actions'

const mapDispatchToProps = {
  fetchBoard
}

export default connect(null, mapDispatchToProps)(JobBoard);
