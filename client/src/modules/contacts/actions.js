import ContactAPI from '../../adapters/contactJobbyAPI';
import ContactsNormalizer from '../../normalizers/ContactsNormalizer';
import * as t from './actionTypes';
import companies from '../companies'

export function fetchContactsAPI() {
  return dispatch => {
    ContactAPI.fetchContacts().then(json => {
      if (json.status === 'SUCCESS') {
        let payload = ContactsNormalizer(json.contacts)
        dispatch({
          type: t.FETCH,
          payload
        })
      }
    })
  }
}

export function fetchContacts(contacts) {
  return {
    type: t.FETCH,
    payload: contacts
  }
}

export function newContactAPI(contactInfo) {
  return dispatch => {
    dispatch(loadingContact())
    ContactAPI.newContact(contactInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      dispatch(companies.actions.addContact({
        contactId: json.contact.id,
        companyId: json.contact.companyId
      }))
      dispatch(newContact(json))
    })
  }
}

export function updateContactAPI(contactInfo, oldCompanyId) {
  return dispatch => {
    dispatch(loadingContact())
    ContactAPI.updateContact(contactInfo).then(json => {
      if (json.company) {
        dispatch(companies.actions.newCompany(json))
      }
      if (json.contact.companyId !== oldCompanyId) {
        dispatch(companies.actions.removeContact({
          contactId: json.contact.id,
          companyId: oldCompanyId
        }))
        dispatch(companies.actions.addContact({
          contactId: json.contact.id,
          companyId: json.contact.companyId
        }))
      }
      dispatch(updateContact(json))
    })
  }
}

export function newContact(contactInfo) {
  return {
    type: t.NEW,
    payload: contactInfo
  }
}

export function updateContact(contactInfo) {
  return {
    type: t.UPDATE,
    payload: contactInfo
  }
}

export function addTouch(touchIdAndContactId) {
  return {
    type: t.ADD_TOUCH,
    payload: touchIdAndContactId
  }
}

export function loadingContact() {
  return {
    type: t.LOADING
  }
}

export function changeSort(option) {
  return {
    type: t.CHANGE_SORT,
    sortBy: option
  }
}
