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
