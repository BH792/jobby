import * as t from './actionTypes';
import jobReducer from './jobReducer';

export default (
  state = {
    sortBy: 'Latest',
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
    case t.NEW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.job.id]: jobReducer(undefined, action),
        },
        allIds: [ ...state.allIds, action.payload.job.id],
        loading: false,
        lastId: action.payload.job.id
      }
    case t.UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.job.id]: jobReducer(state.byId[action.payload.job.id], action)
        },
        loading: false,
        lastId: action.payload.job.id
      }
    case t.LOADING:
      return {
        ...state,
        loading: true
      }
    case t.ADD_TOUCH:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.jobId]: jobReducer(state.byId[action.payload.jobId], action),
        }
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
