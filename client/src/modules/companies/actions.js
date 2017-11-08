import CompanyAPI from '../../adapters/companyJobbyAPI';
import CompaniesNormalizer from '../../normalizers/CompaniesNormalizer';
import * as t from './actionTypes'

export function fetchCompaniesAPI() {
  return dispatch => {
    CompanyAPI.fetchCompanies()
      .then(json => {
        if (json.status === 'SUCCESS') {
          let payload = CompaniesNormalizer(json.companies)
          dispatch({
            type: t.FETCH,
            payload
          })
        }
      })
  }
}

export function fetchCompanies(companies) {
  return {
    type: t.FETCH,
    payload: companies
  }
}

export function newCompanyAPI(companyInfo) {
  return dispatch => {
    CompanyAPI.newCompany(companyInfo).then(json => {
      dispatch(newCompany(json))
    })
  }
}

export function updateCompanyAPI(companyInfo) {
  return dispatch => {
    CompanyAPI.updateCompany(companyInfo).then(json => {
      dispatch(updateCompany(json))
    })
  }
}

export function newCompany(companyInfo) {
  return {
    type: t.NEW,
    payload: companyInfo
  }
}

export function updateCompany(companyInfo) {
  return {
    type: t.UPDATE,
    payload: companyInfo
  }
}

export function mergeCompanies(companiesById) {
  return {
    type: t.MERGE,
    payload: companiesById
  }
}

export function removeJob(jobIdAndCompanyId) {
  return {
    type: t.REMOVE_JOB,
    payload: jobIdAndCompanyId
  }
}

export function addJob(jobIdAndCompanyId) {
  return {
    type: t.ADD_JOB,
    payload: jobIdAndCompanyId
  }
}

export function removeContact(contactIdAndCompanyId) {
  return {
    type: t.REMOVE_CONTACT,
    payload: contactIdAndCompanyId
  }
}

export function addContact(contactIdAndCompanyId) {
  return {
    type: t.ADD_CONTACT,
    payload: contactIdAndCompanyId
  }
}
