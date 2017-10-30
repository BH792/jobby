import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'
import JobsNormalizer from '../normalizers/JobsNormalizer'

export function fetchJobs() {
  return dispatch => {
    return JobbyBackendAdapter.get('/jobs').then(json => {
      let payload = JobsNormalizer(json)
      dispatch({
        type: 'FETCH_JOBS',
        payload
      })
    })
  }
}
