import { createSelector } from 'reselect'

const getCompanies = (state) => state.companies
const getContacts = (state) => state.contacts
const getJobs = (state) => state.jobs

export const getLastId = (state) => state.touches.lastId
export const getLoading = (state) => state.touches.loading

export const mapCompanyNames = createSelector(
  getCompanies,
  (companies) => {
    const companyNames = {}
    companies.allIds.forEach(id => {
      companyNames[id] = companies.byId[id].name
    })
    return companyNames
  }
)

export const mapJobNames = createSelector(
  getJobs,
  mapCompanyNames,
  (jobs, companyNames) => {
    const jobNames = {}
    jobs.allIds.forEach(id => {
      const company = companyNames[jobs.byId[id].companyId]
      jobNames[jobs.byId[id].title + ' - ' + company] = id
    })
    return jobNames
  }
)

export const mapContactNames = createSelector(
  getContacts,
  mapCompanyNames,
  (contacts, companyNames) => {
    const contactNames = {}
    contacts.allIds.forEach(id => {
      const company = companyNames[contacts.byId[id].companyId]
      contactNames[contacts.byId[id].fullname + ' - ' + company] = id
    })
    return contactNames
  }
)

export const getJob = (state, props) => {
  const job = state.jobs.byId[props.jobId]
  const company = state.companies.byId[job.companyId].name
  return [job.title + ' - ' + company, props.jobId]
}

export const getContact = (state, props) => {
  const contact = state.contacts.byId[props.contactId]
  const company = state.companies.byId[contact.companyId].name
  return [contact.fullname + ' - ' + company, props.contactId]
}

export const getAllTouchesWithContactAndJob = (state) => {
  return state.touches.allIds.map(id => {
    const touch = state.touches.byId[id]
    return {
      ...touch,
      contact: state.contacts.byId[touch.contactId].fullname,
      job: touch.jobId ? state.jobs.byId[touch.jobId].title : null,
    }
  })
}

export const getTouchWithContactAndJob = (state, props) => {
  const touch = state.touches.byId[props.touchId]
  return {
    ...touch,
    contact: state.contacts.byId[touch.contactId].fullname,
    job: touch.jobId ? state.jobs.byId[touch.jobId].title : null,
  }
}
