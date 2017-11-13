import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static newCompany(companyInfo) {
    return JobbyAPI.post('/companies', companyInfo)
  }

  static updateCompany(companyInfo) {
    return JobbyAPI.post(`/companies/${companyInfo.id}`, companyInfo)
  }
}
