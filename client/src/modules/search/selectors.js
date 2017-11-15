import { createSelector } from 'reselect'

function getRegexTerm(state) {
  return new RegExp(state.search.searchTerm)
}

export const mapJobResults = createSelector(
  getRegexTerm,
  (state) => state.jobs,
  (regexTerm, jobs) => {
    const results = []
    jobs.allIds.forEach(id => {
      if (regexTerm.test(jobs.byId[id].title)) {
        results.push(jobs.byId[id])
      }
    })
    return results
  }
)

export const mapContactResults = createSelector(
  getRegexTerm,
  (state) => state.contacts,
  (regexTerm, contacts) => {
    const results = []
    contacts.allIds.forEach(id => {
      if (regexTerm.test(contacts.byId[id].fullname)) {
        results.push(contacts.byId[id])
      }
    })
    return results
  }
)

export const mapCompanyResults = createSelector(
  getRegexTerm,
  (state) => state.companies,
  (regexTerm, companies) => {
    const results = []
    companies.allIds.forEach(id => {
      if (regexTerm.test(companies.byId[id].name)) {
        results.push(companies.byId[id])
      }
    })
    return results
  }
)

export const mapTouchResults = createSelector(
  getRegexTerm,
  (state) => state.touches,
  (regexTerm, touches) => {
    const results = []
    touches.allIds.forEach(id => {
      if (regexTerm.test(touches.byId[id].subject)) {
        results.push(touches.byId[id])
      }
    })
    return results
  }
)

export const getSearchTerm = (state) => {
  return state.search.searchTerm
}
