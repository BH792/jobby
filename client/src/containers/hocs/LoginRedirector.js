import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const RedirectorBuilder = (
  baseRedirectPath,
  shouldRedirect,
  shouldRedirectBack = null
) => {
  return function (WrappedComponent) {
    const AuthWrapper = (props) => {
      const { user, match, location } = props
      // TODO: change match.url to location.pathname
      let redirect = shouldRedirect(user)
      let redirectPath = `${baseRedirectPath}?redirect=${encodeURIComponent(match.url)}`

      if (shouldRedirectBack) {
        redirect = shouldRedirect(user) && shouldRedirectBack(user)
        if (location.search) {
          redirectPath = decodeURIComponent(location.search.split('redirect=')[1])
        } else {
          redirectPath = baseRedirectPath
        }
      }

      if (redirect) {
        return <Redirect to={redirectPath} />
      } else {
        return <WrappedComponent {...props}/>
      }
    }

    function mapStateToProps(state) {
      return { user: state.user }
    }

    return connect(mapStateToProps)(AuthWrapper)
  }
}

export const LoginRedirect = RedirectorBuilder('/login', user => !user.id)
export const RedirectBack = RedirectorBuilder('/home', user => !!user.id, user => !user.loading)
