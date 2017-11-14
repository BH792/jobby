import { createSelector } from 'reselect'

const getJobStatusArray = (state, props) => {
  return state.dashboard.board[props.status]
}

const getJobById = (state) => {
  return state.jobs.byId
}

const getCompanyById = (state) => {
  return state.companies.byId
}

export const mapJobsOfStatus = createSelector(
  getJobById,
  getCompanyById,
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
