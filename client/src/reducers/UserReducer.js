export default (
  state = {
    id: null,
    email: null,
    fullname: null
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.payload.user
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        id: null,
        email: null,
        fullname: null
      }
    default:
      return state
  }
}
