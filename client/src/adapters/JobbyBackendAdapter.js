import JobsNormalizer from '../normalizers/JobsNormalizer'
const baseURL = '';

export default class JobbyBackendAdapter {
  static fetchJobs() {
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

  static get(route) {
    return fetch(baseURL + route).then(res => res.json())
  }

  static post(route, body) {
    return fetch(baseURL + route, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
}
