import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/UserActions'

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
