import * as t from './actionTypes';
import contactReducer from './contactReducer';

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
        byId: action.payload || {},
        allIds: Object.keys(action.payload || {})
      }
    case t.NEW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.contact.id]: contactReducer(undefined, action),
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
    case t.ADD_TOUCH:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.contactId]: contactReducer(state.byId[action.payload.contactId], action),
        }
      }
    default:
      return state;
  }
}
