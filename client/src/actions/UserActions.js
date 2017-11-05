import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'

export function submitLogin(userInfo) {
  return (dispatch) => {
    JobbyBackendAdapter.login(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'LOGIN_USER',
            payload: {
              user: json.user,
            }
          })
        }
      })
  }
}

export function submitSignup(userInfo) {
  return (dispatch) => {
    JobbyBackendAdapter.signup(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'LOGIN_USER',
            payload: {
              user: json.user,
            }
          })
        }
      })
  }
}

export function logoutUser() {
  localStorage.removeItem('token')
  return {
    type: 'LOGOUT_USER'
  }
}

export function loginFromLocalStorage() {
  return (dispatch) => {
    JobbyBackendAdapter.loginFromToken()
      .then(json => {
        if (json.status === 'SUCCESS') {
          dispatch({
            type: 'LOGIN_USER',
            payload: {
              user: json.user,
            }
          })
        } else {
          dispatch(logoutUser())
        }
      })
  }
}
