import * as t from './actionTypes'

export default (
  state = {
    sortBy: 'Date',
    lastId: null,
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
    case t.LOADING:
      return {
        ...state,
        loading: true
      }
    case t.NEW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.touch.id]: action.payload.touch
        },
        allIds: [ ...state.allIds, action.payload.touch.id ],
        loading: false,
        lastId: action.payload.touch.id
      }
    case t.UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.touch.id]: action.payload.touch
        },
        loading: false,
        lastId: action.payload.touch.id
      }
    case t.CHANGE_SORT:
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state;
  }
}
