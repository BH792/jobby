import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'

export function newCompany(companyInfo) {
  console.log(companyInfo);
  return dispatch => {
    JobbyBackendAdapter.newCompany(companyInfo).then(json => {
      dispatch({
        type: 'NEW_COMPANY',
        payload: json
      })
    })
  }
}

export function updateCompany(companyInfo) {
  return dispatch => {
    JobbyBackendAdapter.updateCompany(companyInfo).then(json => {
      dispatch({
        type: 'UPDATE_COMPANY',
        payload: json
      })
    })
  }
}
