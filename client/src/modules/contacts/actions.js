import ContactAPI from '../../adapters/contactJobbyAPI';
import ContactsNormalizer from '../../normalizers/ContactsNormalizer';
import * as t from './actionTypes';

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
    ContactAPI.newContact(contactInfo).then(json => {
      dispatch(newContact(json))
    })
  }
}

export function updateContactAPI(contactInfo) {
  return dispatch => {
    ContactAPI.updateContact(contactInfo).then(json => {
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
