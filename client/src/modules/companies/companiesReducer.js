import * as t from './actionTypes';
import companyReducer from './companyReducer';

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
          [action.payload.company.id]: companyReducer(undefined, action),
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
    case t.REMOVE_JOB:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: companyReducer(state.byId[action.payload.companyId], action)
        }
      }
    case t.ADD_JOB:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: companyReducer(state.byId[action.payload.companyId], action)
        }
      }
    default:
      return state
  }
}
