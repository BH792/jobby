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
    case t.FETCH:
      return {
        byId: action.payload.entities.contacts || {},
        allIds: action.payload.result
      }
    case t.NEW:
      return {
        byId: {
          ...state.byId,
          [action.payload.contact.id]: action.payload.contact,
        },
        allIds: [ ...state.allIds, action.payload.contact.id]
      }
    case t.UPDATE:
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
