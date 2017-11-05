import * as t from './actionTypes';

export default (
  state = {
    byId: {},
    allIds: []
  },
  action
) => {
  switch (action.type) {
    case 'LOGOUT_USER':
      return {
        byId: {},
        allIds: []
      }
    case 'FETCH_BOARD':
      let newById = {
        ...state.byId,
        ...action.payload.entities.company || {}
      }
      return {
        ...state,
        byId: newById,
        allIds: Object.keys(newById)
      }
    case t.MERGE:
      newById = {
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
        byId: action.payload.entities.companies || {},
        allIds: action.payload.result
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
