import { createSelector } from 'reselect'

export const getLoading = state => state.jobs.loading

export const getSortBy = state => state.jobs.sortBy

export const getJob = (state, props) => {
  return state.jobs.byId[props.jobId]
}

export const getJobWithCompany = (state, props) => {
  return {
    ...getJob(state, props),
    company: getJobCompanyName(state, props)
  }
}

export const getAllJobsWithCompany = (state) => {
  return state.jobs.allIds.map(id => {
    return {
      ...getJobWithCompany(state, { jobId: id })
    }
  })
}

export const getLastId = (state) => {
  return state.jobs.lastId
}

export const getJobCompanyName = (state, props) => {
  if (getJob(state, props)) {
    return state.companies.byId[getJob(state, props).companyId].name
  } else {
    return null
  }
}

export const getJobTouchIds = (state, props) => {
  return getJob(state, props).touches
}

export const getCompanyNames = (state) => {
  const companyNames = {}
  state.companies.allIds.forEach(id => {
    companyNames[state.companies.byId[id].name] = state.companies.byId[id].id
  })
  return companyNames
}

export const getJobTouches = (state, props) => {
  return getJobTouchIds(state, props).map(touchId => {
    return {
      ...getTouch(state, { touchId }),
      contact: getTouchContactName(state, { touchId }),
      job: getTouchJobTitle(state, { touchId })
    }
  })
}

const getTouch = (state, props) => {
  return state.touches.byId[props.touchId]
}

const getTouchContactName = (state, props) => {
  return state.contacts.byId[getTouch(state, props).contactId].fullname
}

const getTouchJobTitle = (state, props) => {
  if (getTouch(state, props).jobId) {
    return state.jobs.byId[getTouch(state, props).jobId].title
  } else {
    return null
  }
}

export const getSortedJobsWithCompany = createSelector(
  getAllJobsWithCompany,
  getSortBy,
  (companies, sortBy) => {
    return companies.sort((a, b) => {
      switch (sortBy) {
        case 'Latest':
          return sortByLatest(a,b);
        case 'Alphabetical':
          return sortByAlpha(a, b)
        default:
          return 0;
      }
    })
  }
)

function sortByLatest(a, b) {
  if (a.createdAt < b.createdAt) {
    return -1
  } else if (a.createdAt > b.createdAt) {
    return 1
  } else {
    return 0
  }
}

function sortByAlpha(a, b) {
  if (a.title.toUpperCase() < b.title.toUpperCase()) {
    return -1
  } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
    return 1
  } else {
    return 0
  }
}
