import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'
import JobsNormalizer from '../normalizers/JobsNormalizer'

export function fetchJobs() {
  return dispatch => {
    JobbyBackendAdapter.get('/jobs').then(json => {
      let payload = JobsNormalizer(json)
      dispatch({
        type: 'FETCH_JOBS',
        payload
      })
    })
  }
}

export function changeJobStatus(jobId, newStatus) {
  return {
    type: 'CHANGE_JOB_STATUS',
    jobId,
    newStatus
  }
}

export function swapJobOrder(curOrder, newOrder) {
  return {
    type: 'SWAP_JOB_ORDER',
    curOrder,
    newOrder
  }
}

export function newJob(jobInfo) {
  return dispatch => {
    JobbyBackendAdapter.newJob(jobInfo).then(json => {
      if (json.company) {
        dispatch({
          type: 'NEW_COMPANY',
          payload: json
        })
      }
      dispatch({
        type: 'NEW_JOB',
        payload: json
      })
    })
  }
}

export function updateJob(jobInfo) {
  return dispatch => {
    JobbyBackendAdapter.updateJob(jobInfo).then(json => {
      if (json.company) {
        dispatch({
          type: 'NEW_COMPANY',
          payload: json
        })
      }
      dispatch({
        type: 'UPDATE_JOB',
        payload: json
      })
    })
  }
}
