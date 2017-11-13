import * as t from './actionTypes';
import jobReducer from './jobReducer';

export default (
  state = {
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
    // case 'CHANGE_JOB_STATUS':
    //   return {
    //     ...state,
    //     byId: {
    //       ...state.byId,
    //       [action.jobId]: {
    //         ...state.byId[action.jobId],
    //         status: action.newStatus
    //       }
    //     }
    //   }
    // case 'SWAP_JOB_ORDER':
    //   let { curOrder, newOrder } = action
    //
    //   let swappedAllIds = [...state.allIds]
    //   swappedAllIds.splice(newOrder, 0, swappedAllIds.splice(curOrder, 1)[0])
    //
    //   let newById = { ...state.byId }
    //   newById[state.allIds[curOrder]].status = newById[state.allIds[newOrder]].status
    //   swappedAllIds.forEach((id, index) => {
    //     newById[id].order = index
    //   })
    //   return {
    //     ...state,
    //     byId: newById,
    //     allIds: swappedAllIds
    //   };
    default:
      return state;
  }
}
