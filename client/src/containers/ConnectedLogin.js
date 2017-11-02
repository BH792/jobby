import Login from '../components/Login';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/UserActions'

export default connect(null, {submitLogin})(Login)
