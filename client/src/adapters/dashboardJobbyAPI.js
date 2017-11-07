import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static fetchDashboard() {
    return JobbyAPI.get('/dashboard/test')
  }
}
