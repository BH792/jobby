import React from 'react'
import ConnectedLogin from '../containers/ConnectedLogin'
import LoginRedirector from '../containers/hocs/LoginRedirector'
import { Link, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/PublicHomepage.css'

const Body = () => {
  return (
    <div className='PublicHomepageBody'>BODY</div>
  )
}

const PublicHomepage = ({userId}) => {
  if (userId) {
    return <Redirect to='/home' />
  }

  return (
    <div className='PublicHomepage'>
      <Route exact path='/login' component={ConnectedLogin} />
      <Route exact path='/' component={Body} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.user.id
  }
}

export default withRouter(connect(mapStateToProps, {})(PublicHomepage))
