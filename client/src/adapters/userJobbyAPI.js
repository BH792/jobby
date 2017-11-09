import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static signup(userInfo) {
    return JobbyAPI.post('/users/signup', userInfo)
  }

  static login(userInfo) {
    return JobbyAPI.post('/users/login', userInfo)
  }

  static loginFromToken() {
    return JobbyAPI.get('/users/login/reauthenticate')
  }

  static fetchAllData() {
    return JobbyAPI.get('/users/alldata')
  }
}
