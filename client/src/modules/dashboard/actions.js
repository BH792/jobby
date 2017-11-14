import DashboardAPI from '../../adapters/dashboardJobbyAPI';
import normalizeDashboard from '../../normalizers/DashboardNormalizer'
import * as t from './actionTypes'

export function fetchBoardAPI() {
  return dispatch => {
    DashboardAPI.fetchDashboard().then(json => {
      const payload = normalizeDashboard(json)
      dispatch(fetchBoard(payload))
    })
  }
}

export function fetchBoard(board) {
  return {
    type: t.FETCH,
    payload: board
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
