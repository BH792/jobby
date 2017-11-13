import * as t from './actionTypes';

export default (
  state = {
    id: null,
    fullname: null,
    companyId: null,
    cellNumber: null,
    officeNumber: null,
    email: null,
    title: null,
    createdAt: null,
    updatedAt: null,
    userId: null,
    touches: []
  },
  action
) => {
  switch (action.type) {
    case t.NEW:
      return {
        ...state,
        ...action.payload.contact
      };
    case t.ADD_TOUCH:
      return {
        ...state,
        touches: [ ...state.touches, action.payload.touchId]
      }
    default:
      return state;
  }
}
