import * as t from './actionTypes'

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
      return {
        ...state,
        byId: action.payload.entities.jobs || {},
        allIds: action.payload.result
      }
    case t.MERGE:
      let newById = {
        ...state.byId,
        ...action.payload
      }
      return {
        byId: newById,
        allIds: Object.keys(newById)
      }
    case t.FETCH:
      return {
        byId: action.payload.entities.contacts || {},
        allIds: action.payload.result
      }
    case t.NEW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.job.id]: action.payload.job,
        },
        allIds: [ ...state.allIds, action.payload.job.id]
      }
    case t.UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.job.id]: action.payload.job
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
