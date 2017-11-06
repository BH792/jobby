import * as t from './actionTypes'

export default (
  state = {
    loading: false,
    id: null,
    email: null,
    fullname: null
  },
  action
) => {
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        loading: false,
        ...action.payload.user
      }
    case t.LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
