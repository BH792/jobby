import JobAPI from '../../adapters/jobJobbyAPI';
import * as t from './actionTypes'
import companies from '../companies'
import dashboard from '../dashboard'

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
    dispatch(loadingJob())
    JobAPI.updateJob(jobInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      if (oldCompanyId && json.job.companyId !== oldCompanyId) {
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

export function addTouch(touchIdAndJobId) {
  return {
    type: t.ADD_TOUCH,
    payload: touchIdAndJobId
  }
}

export function addJobToDashboard(jobId) {
  return (dispatch, getState) => {
    const status = getState().jobs.byId[jobId].status
    const statusArr = getState().dashboard.board[status]
    const updatedStatusArr = [ ...statusArr, jobId]
    dispatch(dashboard.actions.updateJobBoard({ [status]: updatedStatusArr }))
    JobAPI.updateJob({ id: jobId, order: statusArr.length}).then(json => {
      console.log(json);
      if (json.status === 'SUCCESS') {
        dispatch(updateJob(json))
      }
    })
  }
}

export function removeJobFromDashboard(jobId) {
  console.log("remove from board");
  return (dispatch, getState) => {
    const status = getState().jobs.byId[jobId].status
    const statusArr = getState().dashboard.board[status]

    const index = statusArr.indexOf(jobId)
    const beforeArr = statusArr.slice(0, index)
    const afterArr = statusArr.slice(index + 1)

    const updatedStatusArr = [ ...beforeArr, ...afterArr ]
    dispatch(dashboard.actions.updateJobBoard({ [status]: updatedStatusArr }))
    JobAPI.updateJob({ id: jobId, order: null}).then(json => {
      if (json.status === 'SUCCESS') {
        console.log(json);
        dispatch(updateJob(json))
      }
    })
  }
}

export function changeSort(option) {
  return {
    type: t.CHANGE_SORT,
    sortBy: option
  }
}
