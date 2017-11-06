import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import users from '../modules/users'
const { logoutUser } = users.actions

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
