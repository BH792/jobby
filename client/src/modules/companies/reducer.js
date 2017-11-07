import * as t from './actionTypes';

export default (
  state = {
    loading: false,
    byId: {},
    allIds: []
  },
  action
) => {
  switch (action.type) {
    case t.MERGE:
      let newById = {
        ...state.byId,
        ...action.payload || {}
      }
      return {
        ...state,
        byId: newById,
        allIds: Object.keys(newById)
      }
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
          [action.payload.company.id]: action.payload.company,
        },
        allIds: [ ...state.allIds, action.payload.company.id]
      }
    case t.UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.company.id]: action.payload.company,
        }
      }
    default:
      return state
  }
}
