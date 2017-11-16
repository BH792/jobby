import { createSelector } from 'reselect'

export const getCompanyById = createSelector(
  state => state.companies.byId,
  (state, props) => props.companyId,
  (companiesById, companyId) => {
    return companiesById[companyId] || {}
  }
)

export const getCompanyContacts = createSelector(
  getCompanyById,
  state => state.contacts.byId,
  (company, contactsById) => {
    return company.contacts.map(id => contactsById[id])
  }
)
