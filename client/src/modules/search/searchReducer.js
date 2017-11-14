import * as t from './actionTypes';

export default (
  state = {
    searchTerm: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case t.SET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}
