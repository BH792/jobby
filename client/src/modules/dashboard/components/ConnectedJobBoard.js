import JobBoard from './JobBoard';
import { connect } from 'react-redux';
import { fetchBoard } from '../actions'

function mapStateToProps(state) {
  return {
    isDataCached: state.jobs.allIds.length > 0 && state.companies.allIds.length > 0
  }
}

const mapDispatchToProps = {
  fetchBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
