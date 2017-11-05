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
    case 'FETCH_CONTACTS':
      return {
        byId: action.payload.entities.contacts || {},
        allIds: action.payload.result
      }
    case 'NEW_CONTACT':
      return {
        byId: {
          ...state.byId,
          [action.payload.contact.id]: action.payload.contact,
        },
        allIds: [ ...state.allIds, action.payload.contact.id]
      }
    case 'UPDATE_CONTACT':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.contact.id]: action.payload.contact,
        }
      }
    default:
      return state;
  }
}
