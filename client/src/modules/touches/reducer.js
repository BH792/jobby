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
    case t.NEW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.touch.id]: action.payload.touch
        },
        allIds: [ ...state.allIds, action.payload.touch.id ]
      }
    default:
      return state;
  }
}
