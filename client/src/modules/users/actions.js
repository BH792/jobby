import UserAPI from '../../adapters/userJobbyAPI'
import * as t from './actionTypes'

export function submitLogin(userInfo) {
  return (dispatch) => {
    UserAPI.login(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch({
            type: t.LOGIN,
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
    UserAPI.signup(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch({
            type: t.LOGIN,
            payload: {
              user: json.user,
            }
          })
        }
      })
  }
}

export function logoutUser() {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: t.LOGOUT })
  }
}

export function loginFromLocalStorage() {
  return (dispatch) => {
    dispatch(loading())
    UserAPI.loginFromToken()
      .then(json => {
        if (json.status === 'SUCCESS') {
          dispatch({
            type: t.LOGIN,
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

function loading() {
  return {
    type: t.LOADING
  }
}
