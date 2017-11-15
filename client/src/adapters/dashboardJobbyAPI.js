import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static fetchDashboard() {
    return JobbyAPI.get('/dashboard')
  }

  static changeJobOrder(payload) {
    return JobbyAPI.post('/dashboard/changeorder', payload)
  }
}
