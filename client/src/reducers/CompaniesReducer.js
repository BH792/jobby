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
    case 'FETCH_JOBS':
      let newById = {
        ...state.byId,
        ...action.payload.entities.company || {}
      }
      return {
        ...state,
        byId: newById,
        allIds: Object.keys(newById)
      }
    case 'NEW_COMPANY':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.company.id]: action.payload.company,
        },
        allIds: [ ...state.allIds, action.payload.company.id]
      }
    case 'UPDATE_COMPANY':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.company.id]: action.payload.company,
        },
        allIds: [ ...state.allIds, action.payload.company.id]
      }
    default:
      return state
  }
}
