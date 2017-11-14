import * as t from './actionTypes'

export function getSearchResults(searchTerm) {
  return {
    type: t.SET_SEARCH,
    payload: searchTerm
  }
}
