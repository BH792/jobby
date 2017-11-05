import React, { Component } from 'react'
import users from '../modules/users'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/PublicHomepage.css'

const { submitLogin, submitSignup, loginFromLocalStorage } = users.actions
const { Signup, Login } = users.components

const Body = () => {
  return (
    <div className='PublicHomepageBody'>BODY</div>
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
    const { userId, submitLogin, submitSignup } = this.props

    if (userId) {
      return <Redirect to='/home' />
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
    userId: state.user.id
  }
}

const mapDispatchToProps = {
  submitLogin,
  submitSignup,
  loginFromLocalStorage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicHomepage))
