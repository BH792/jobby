import { createSelector } from 'reselect'

const getCompanies = (state) => state.companies
const getContacts = (state) => state.contacts
const getJobs = (state) => state.jobs

export const mapCompanyNameToId = createSelector(
  getCompanies,
  (companies) => {
    const companyNames = {}
    companies.allIds.forEach(id => {
      companyNames[companies.byId[id].name] = companies.byId[id].id
    })
    return companyNames
  }
)
