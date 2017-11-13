import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static newJob(jobInfo) {
    return JobbyAPI.post('/jobs', jobInfo)
  }

  static updateJob(jobInfo) {
    return JobbyAPI.post(`/jobs/${jobInfo.id}`, jobInfo)
  }
}
