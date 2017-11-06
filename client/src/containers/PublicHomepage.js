import React, { Component } from 'react'
import LoadingIcon from '../components/LoadingIcon'
import users from '../modules/users'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/PublicHomepage.css'

import { RedirectBack } from './hocs/LoginRedirector';

const { submitLogin, submitSignup, loginFromLocalStorage } = users.actions
const { Signup, Login } = users.components

const Body = () => {
  return (
    <div className='PublicHomepageBody PublicHomepageBodyImage'>
    </div>
  )
}

class PublicHomepage extends Component {
  componentDidMount() {
    try {
      if (localStorage.getItem('token')) {
        this.props.loginFromLocalStorage()
      }
    } catch (e) {

    }
  }

  render() {
    const { userId, userLoading, submitLogin, submitSignup } = this.props

    if (userId) {
      return <Redirect to='/home' />
    }

    if (userLoading) {
      return (
        <div className='PublicHomepageBody' style={{textAlign: 'center'}}>
          <LoadingIcon dimensions={{height: 250, width: 250}}/>
        </div>
      )
    }

    return (
      <div className='PublicHomepage'>
        <Route exact path='/signup' render={() => <Signup submitSignup={submitSignup} />} />
        <Route exact path='/login' render={() => <Login submitLogin={submitLogin} />} />
        <Route exact path='/' component={Body} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.id,
    userLoading: state.user.loading
  }
}

const mapDispatchToProps = {
  submitLogin,
  submitSignup,
  loginFromLocalStorage
}

const connectedPublicHomepage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicHomepage))
export default RedirectBack(connectedPublicHomepage)
