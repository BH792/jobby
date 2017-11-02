import Signup from '../components/Signup';
import { connect } from 'react-redux';
import { submitSignup } from '../actions/UserActions'

export default connect(null, {submitSignup})(Signup)
