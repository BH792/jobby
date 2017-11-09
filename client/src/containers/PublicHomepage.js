import React from 'react'
import users from '../modules/users'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/PublicHomepage.css'

import { RedirectBack } from './hocs/LoginRedirector';

const { submitLogin, submitSignup } = users.actions
const { Signup, Login } = users.components

const Body = () => {
  return (
    <div className='PublicHomepageBody PublicHomepageBodyImage'>
    </div>
  )
}

const PublicHomepage = ({
  userId,
  userLoading,
  submitLogin,
  submitSignup
}) => {
  return (
    <div className='PublicHomepage'>
      <Route exact path='/signup' render={() => <Signup submitSignup={submitSignup} />} />
      <Route exact path='/login' render={() => <Login submitLogin={submitLogin} />} />
      <Route exact path='/' component={Body} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = {
  submitLogin,
  submitSignup
}

const connectedPublicHomepage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicHomepage))
export default RedirectBack(connectedPublicHomepage)
