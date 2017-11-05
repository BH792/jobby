import * as t from './actionTypes'

export default (
  state = {
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
        ...action.payload.user
      }
    default:
      return state
  }
}
