import { createSelector } from 'reselect'

const getJobStatusArray = (state, props) => {
  return state.dashboard.board[props.status]
}

const getJobsById = (state) => {
  return state.jobs.byId
}

const getCompaniesById = (state) => {
  return state.companies.byId
}

export const mapJobsOfStatus = createSelector(
  getJobsById,
  getCompaniesById,
  getJobStatusArray,
  (jobById, companyById, jobIds) => {
    return jobIds.map(jobId => {
      const job = jobById[jobId]
      return {
        id: job.id,
        title: job.title,
        company: companyById[job.companyId].name
      }
    })
  }
)

export const getJobCount = createSelector(
  state => state.jobs,
  (jobs) => {
    let count = 0;
    const date = new Date()
    date.setDate(date.getDate() - 7)
    jobs.allIds.forEach(id => {
      const createdDate = new Date(jobs.byId[id].createdAt)
      if (createdDate > date) {
        count ++
      }
    })
    return count
  }
)

export const getCompanyCount = createSelector(
  state => state.companies,
  (companies) => {
    let count = 0;
    const date = new Date()
    date.setDate(date.getDate() - 7)
    companies.allIds.forEach(id => {
      const createdDate = new Date(companies.byId[id].updatedAt)
      if (createdDate > date) {
        count ++
      }
    })
    return count
  }
)

export const getContactCount = createSelector(
  state => state.contacts,
  (contacts) => {
    let count = 0;
    const date = new Date()
    date.setDate(date.getDate() - 7)
    contacts.allIds.forEach(id => {
      const createdDate = new Date(contacts.byId[id].createdAt)
      if (createdDate > date) {
        count ++
      }
    })
    return count
  }
)

export const getTouchCount = createSelector(
  state => state.touches,
  (touches) => {
    let count = 0;
    const date = new Date()
    date.setDate(date.getDate() - 7)
    touches.allIds.forEach(id => {
      const createdDate = new Date(touches.byId[id].createdAt)
      if (createdDate > date) {
        count ++
      }
    })
    return count
  }
)

export const getUpcomingTouches = createSelector(
  state => state.touches,
  state => state.contacts.byId,
  state => state.jobs.byId,
  (touches, contactsById, jobsById) => {
    const results = []
    const today = new Date()
    touches.allIds.forEach(id => {
      const touchDate = new Date(touches.byId[id].date)
      if (touchDate > today) {
        const job = touches.byId[id].jobId ? jobsById[touches.byId[id].jobId].title : null
        results.push({
          ...touches.byId[id],
          contact: contactsById[touches.byId[id].contactId].fullname,
          job
        })
      }
    })
    return results
  }
)

export const getOrderedUpcomingTouches = createSelector(
  getUpcomingTouches,
  touches => {
    return touches.sort((a, b) => {
      if (a.date < b.date) {
        return -1
      } else if (a.date > b.date) {
        return 1
      } else {
        return 0
      }
    })
  }
)
