import UserAPI from '../../adapters/userJobbyAPI'
import jobs from '../jobs'
import companies from '../companies'
import contacts from '../contacts'
import touches from '../touches'
import dashboard from '../dashboard'
import * as t from './actionTypes'
import normalizeAllData from '../../normalizers/AllDataNormalizer';

export function submitLogin(userInfo) {
  return (dispatch) => {
    dispatch(loading())
    UserAPI.login(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch(login(json.user))
          fetchAllData(dispatch)
        }
      })
  }
}

export function submitSignup(userInfo) {
  return (dispatch) => {
    dispatch(loading())
    UserAPI.signup(userInfo)
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch(login(json.user))
          fetchAllData(dispatch)
        }
      })
  }
}

export function loginFromLocalStorage() {
  return (dispatch) => {
    dispatch(loading())
    UserAPI.loginFromToken()
      .then(json => {
        if (json.status === 'SUCCESS') {
          dispatch(login(json.user))
          fetchAllData(dispatch)
        } else {
          dispatch(logoutUser())
        }
      })
  }
}

function fetchAllData(dispatch) {
  UserAPI.fetchAllData().then(json => {
    let payload = normalizeAllData(json)
    dispatch(companies.actions.fetchCompanies(payload.entities.companies))
    dispatch(jobs.actions.fetchJobs(payload.entities.jobs))
    dispatch(touches.actions.fetchTouches(payload.entities.touches))
    dispatch(contacts.actions.fetchContacts(payload.entities.contacts))
    dashboard.actions.fetchBoardAPICallOnly().then(json => {
      dashboard.actions.fetchBoardParseJSON(dispatch, json)
      dispatch(finishLoading())
    })
  })
}

function login(user) {
  return {
    type: t.LOGIN,
    payload: {
      user: user,
    }
  }
}

export function logoutUser() {
  localStorage.removeItem('token')
  return {
    type: t.LOGOUT
  }
}

function loading() {
  return {
    type: t.LOADING
  }
}

function finishLoading() {
  return {
    type: t.FINISH_LOADING
  }
}
