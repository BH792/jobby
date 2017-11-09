import * as t from './actionTypes'

export default (
  state = {
    loading: false,
    id: null,
    email: null,
    fullname: null,
    fetchedData: false
  },
  action
) => {
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        ...action.payload.user
      }
    case t.FINISH_LOADING:
      return {
        ...state,
        loading: false
      }
    case t.LOADING:
      return {
        ...state,
        loading: true
      }
    case t.FETCHED_DATA:
      return {
        ...state,
        fetchedData: true
      }
    default:
      return state
  }
}
