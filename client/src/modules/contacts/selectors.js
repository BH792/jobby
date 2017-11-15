import { createSelector } from 'reselect'

export const getLoading = (state) => state.contacts.loading
export const getLastId = (state) => state.contacts.lastId

const getContact = (state, props) => {
  return state.contacts.byId[props.contactId]
}

const getContactCompanyName = (state, props) => {
  const contact = getContact(state, props)
  if (contact) {
    return state.companies.byId[contact.companyId].name
  } else {
    return null
  }
}

export const getContactWithCompany = createSelector(
  getContact,
  getContactCompanyName,
  (contact, company) => {
    return {
      ...contact,
      company
    }
  }
)
