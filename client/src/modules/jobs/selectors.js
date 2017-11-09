import { createSelector } from 'reselect'

export const getLoading = (state) => {
  return state.jobs.loading
}

export const getJob = (state, props) => {
  return state.jobs.byId[props.jobId]
}

export const getLastId = (state) => {
  return state.jobs.lastId
}

export const getJobCompanyName = (state, props) => {
  return state.companies.byId[getJob(state, props).companyId].name
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
      contact: getTouchContactName(state, { touchId })
    }
  })
}

const getTouch = (state, props) => {
  return state.touches.byId[props.touchId]
}

const getTouchContactName = (state, props) => {
  return state.contacts.byId[getTouch(state, props).contactId].fullname
}
