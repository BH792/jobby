import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'

export function submitLogin(userInfo) {
  return (dispatch) => {
    JobbyBackendAdapter.login(userInfo)
      .then(json => {
        if (json.type === 'SUCCESS') {
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
