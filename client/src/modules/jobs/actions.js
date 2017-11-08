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
    dispatch(loadingJob())
    JobAPI.newJob(jobInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      dispatch(companies.actions.addJob({
        jobId: json.job.id,
        companyId: json.job.companyId
      }))
      dispatch(newJob(json))
    })
  }
}

export function updateJobAPI(jobInfo, oldCompanyId) {
  return dispatch => {
    JobAPI.updateJob(jobInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      if (json.job.companyId !== oldCompanyId) {
        dispatch(companies.actions.removeJob({
          jobId: json.job.id,
          companyId: oldCompanyId
        }))
        dispatch(companies.actions.addJob({
          jobId: json.job.id,
          companyId: json.job.companyId
        }))
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

export function loadingJob() {
  return {
    type: t.LOADING
  }
}
