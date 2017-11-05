import JobbyBackendAdapter from '../adapters/JobbyBackendAdapter'
import ContactsNormalizer from '../normalizers/ContactsNormalizer'

export function fetchContacts() {
  return dispatch => {
    JobbyBackendAdapter.get('/contacts').then(json => {
      if (json.status === 'SUCCESS') {
        let payload = ContactsNormalizer(json.contacts)
        dispatch({
          type: 'FETCH_CONTACTS',
          payload
        })
      }
    })
  }
}

export function newContact(contactInfo) {
  return dispatch => {
    JobbyBackendAdapter.newContact(contactInfo).then(json => {
      dispatch({
        type: 'NEW_CONTACT',
        payload: json
      })
    })
  }
}

export function updateContact(contactInfo) {
  return dispatch => {
    JobbyBackendAdapter.updateContact(contactInfo).then(json => {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: json
      })
    })
  }
}
