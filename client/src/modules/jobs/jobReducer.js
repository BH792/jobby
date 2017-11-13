import * as t from './actionTypes'

export default (
  state = {
    id: null,
    title: null,
    description: null,
    status: null,
    order: null,
    companyId: null,
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
        ...action.payload.job
      }
    case t.UPDATE:
      return {
        ...state,
        ...action.payload.job
      }
    case t.ADD_TOUCH:
      return {
        ...state,
        touches: [ ...state.touches, action.payload.touchId ]
      }
    default:
      return state;
  }
}
