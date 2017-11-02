export default (
  state = {
    byId: {},
    allIds: []
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      let newById = {
        ...state.byId,
        ...action.payload.entities.company
      }
      return {
        ...state,
        byId: newById,
        allIds: Object.keys(newById)
      }
    default:
      return state
  }
}
