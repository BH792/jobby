export default (
  state = {
    byId: {},
    allIds: []
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      return {
        ...state,
        byId: action.payload.entities.jobs,
        allIds: action.payload.result
      }
    default:
      return state;
  }
}
