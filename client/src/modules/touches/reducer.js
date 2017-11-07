import * as t from './actionTypes'

export default (
  state = {
    loading: false,
    byId: {},
    allIds: []
  },
  action
) => {
  switch (action.type) {
    case t.FETCH:
      return {
        ...state,
        byId: action.payload || {},
        allIds: Object.keys(action.payload || {})
      }
    default:
      return state;
  }
}
