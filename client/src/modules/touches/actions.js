import * as t from './actionTypes'

export function fetchTouches(touches) {
  return {
    type: t.FETCH,
    payload: touches
  }
}