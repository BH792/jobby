import * as t from './actionTypes';

export default (
  state = {
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
        byId: action.payload.entities.contacts || {},
        allIds: action.payload.result
      }
    case t.NEW:
      return {
        ...state,
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
