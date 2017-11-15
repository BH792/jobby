import * as t from './actionTypes'

export default (
  state = {
    board: {
      watching: [],
      applied: [],
      interviewed: [],
      offered: []
    }
  },
  action
) => {
  switch (action.type) {
    case t.FETCH:
      return {
        ...state,
        board: action.payload
      }
    case t.UPDATE_BOARD:
      return {
        ...state,
        board: {
          ...state.board,
          ...action.payload
        }
      }
    default:
      return state;
  }
}
