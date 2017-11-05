import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static fetchContacts() {
    return JobbyAPI.get('/contacts')
  }

  static newContact(contactInfo) {
    return JobbyAPI.post('/contacts', contactInfo)
  }

  static updateContact(contactInfo) {
    return JobbyAPI.post(`/contacts/${contactInfo.id}`, contactInfo)
  }
}
