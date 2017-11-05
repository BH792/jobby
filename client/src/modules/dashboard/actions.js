import DashboardAPI from '../../adapters/dashboardJobbyAPI';
import DashboardNormalizer from '../../normalizers/DashboardNormalizer';
import jobs from '../jobs'
import companies from '../companies'

export function fetchBoard() {
  return dispatch => {
    DashboardAPI.fetchDashboard().then(json => {
      let payload = DashboardNormalizer(json)
      dispatch(companies.actions.mergeCompanies(payload.entities.companies))
      dispatch(jobs.actions.mergeJobs(payload.entities.jobs))
    })
  }
}

export function changeJobStatus(jobId, newStatus) {
  return {
    type: 'CHANGE_JOB_STATUS',
    jobId,
    newStatus
  }
}

export function swapJobOrder(curOrder, newOrder) {
  return {
    type: 'SWAP_JOB_ORDER',
    curOrder,
    newOrder
  }
}
