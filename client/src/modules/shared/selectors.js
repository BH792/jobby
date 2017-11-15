import { createSelector } from 'reselect'

const getCompanies = (state) => state.companies

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
