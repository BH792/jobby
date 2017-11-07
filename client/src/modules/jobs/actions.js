import JobAPI from '../../adapters/jobJobbyAPI'
import * as t from './actionTypes'
import companies from '../companies'


export function fetchJobsAPI() {
  return dispatch => {
    JobAPI.fetchJobs().then(json => {
      if (json.status === 'SUCCESS') {
        dispatch({
          type: t.FETCH,
          payload: json
        })
      }
    })
  }
}

export function fetchJobs(jobs) {
  return {
    type: t.FETCH,
    payload: jobs
  }
}

export function newJobAPI(jobInfo) {
  return dispatch => {
    JobAPI.newJob(jobInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      dispatch(dispatch(newJob(json)))
    })
  }
}

export function updateJobAPI(jobInfo) {
  return dispatch => {
    JobAPI.updateJob(jobInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      dispatch(updateJob(json))
    })
  }
}

export function newJob(jobInfo) {
  return {
    type: t.NEW,
    payload: jobInfo
  }
}

export function updateJob(jobInfo) {
  return {
    type: t.UPDATE,
    payload: jobInfo
  }
}

export function mergeJobs(jobsById) {
  return {
    type: t.MERGE,
    payload: jobsById
  }
}
