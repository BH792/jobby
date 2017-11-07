import DashboardAPI from '../../adapters/dashboardJobbyAPI';
import { normalizeAllData } from '../../normalizers/DashboardNormalizer';
import jobs from '../jobs'
import companies from '../companies'
import contacts from '../contacts'
import touches from '../touches'

export function fetchBoard() {
  return dispatch => {
    DashboardAPI.fetchDashboard().then(json => {
      let payload = normalizeAllData(json)
      dispatch(companies.actions.fetchCompanies(payload.entities.companies))
      dispatch(jobs.actions.fetchJobs(payload.entities.jobs))
      dispatch(touches.actions.fetchTouches(payload.entities.touches))
      dispatch(contacts.actions.fetchContacts(payload.entities.contacts))
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
