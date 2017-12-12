import TouchAPI from '../../adapters/touchJobbyAPI';
import * as t from './actionTypes';
import contacts from '../contacts';
import jobs from '../jobs';

export function fetchTouches(touches) {
  return {
    type: t.FETCH,
    payload: touches
  }
}

export function newTouchAPI(touchInfo) {
  return dispatch => {
    dispatch(loadingTouch())
    TouchAPI.newTouch(touchInfo).then(json => {
      if (json.touch.jobId) {
        dispatch(jobs.actions.addTouch({
          touchId: json.touch.id,
          jobId: json.touch.jobId
        }))
      }
      dispatch(contacts.actions.addTouch({
        touchId: json.touch.id,
        contactId: json.touch.contactId
      }))
      dispatch(newTouch(json))
    })
  }
}

export function updateTouchAPI(touchInfo) {
  return dispatch => {
    dispatch(loadingTouch())
    TouchAPI.updateTouch(touchInfo).then(json => {
      dispatch(editTouch(json))
    })
  }
}

export function newTouch(touchInfo) {
  return {
    type: t.NEW,
    payload: touchInfo
  }
}

export function editTouch(touchInfo) {
  return {
    type: t.UPDATE,
    payload: touchInfo
  }
}

export function loadingTouch() {
  return {
    type: t.LOADING,
  }
}

export function changeSort(option) {
  return {
    type: t.CHANGE_SORT,
    sortBy: option
  }
}
