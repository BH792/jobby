import { createSelector } from 'reselect'

const getCompanies = (state) => state.companies
const getContacts = (state) => state.contacts
const getJobs = (state) => state.jobs

export const getSortBy = (state) => state.touches.sortBy
export const getLastId = (state) => state.touches.lastId
export const getLoading = (state) => state.touches.loading

const mapCompanyIdToName = createSelector(
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
  mapCompanyIdToName,
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
  mapCompanyIdToName,
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

const getTouch = (state, props) => {
  return state.touches.byId[props.touchId]
}

export const getTouchWithContactAndJob = (state, props) => {
  const touch = state.touches.byId[props.touchId]
  return {
    ...getTouch(state, props),
    contact: state.contacts.byId[touch.contactId].fullname,
    job: touch.jobId ? state.jobs.byId[touch.jobId].title : null,
  }
}

export const getRelatedContact = createSelector(
  getTouch,
  state => state.contacts.byId,
  state => state.companies.byId,
  (touch, contactsById, companiesById) => {
    return {
      ...contactsById[touch.contactId],
      company: companiesById[contactsById[touch.contactId].companyId].name
    }
  }
)

export const getRelatedJob = createSelector(
  getTouch,
  state => state.jobs.byId,
  state => state.companies.byId,
  (touch, jobsById, companiesById) => {
    if (touch.jobId) {
      return {
        ...jobsById[touch.jobId],
        company: companiesById[jobsById[touch.jobId].companyId].name
      }
    } else {
      return {}
    }
  }
)

export const getSortedTouchesWithContactAndJob = createSelector(
  getAllTouchesWithContactAndJob,
  getSortBy,
  (touches, sortBy) => {
    return touches.sort((a, b) => {
      switch (sortBy) {
        case 'Date':
          return sortByLatest(a, b);
        case 'Subject':
          return sortByAlpha(a, b);
        default:
          return 0;
      }
    })
  }
)

function sortByLatest(a, b) {
  if (a.date < b.date) {
    return -1
  } else if (a.date > b.date) {
    return 1
  } else {
    return 0
  }
}

function sortByAlpha(a, b) {
  if (a.subject.toUpperCase() < b.subject.toUpperCase()) {
    return -1
  } else if (a.subject.toUpperCase() > b.subject.toUpperCase()) {
    return 1
  } else {
    return 0
  }
}
