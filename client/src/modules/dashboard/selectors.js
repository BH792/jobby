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
