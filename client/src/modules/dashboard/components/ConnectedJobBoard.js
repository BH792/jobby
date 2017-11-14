import JobBoard from './JobBoard';
import { connect } from 'react-redux';
import { fetchBoardAPI } from '../actions'

function mapStateToProps(state) {
  return {
    isDataCached: state.dashboard.board.watching.length > 0 || state.dashboard.board.applied.length > 0 || state.dashboard.board.interviewed.length > 0 || state.dashboard.board.offered.length > 0
  }
}

const mapDispatchToProps = {
  fetchBoardAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
