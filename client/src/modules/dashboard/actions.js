import DashboardAPI from '../../adapters/dashboardJobbyAPI';
import JobAPI from '../../adapters/jobJobbyAPI';
import normalizeDashboard from '../../normalizers/DashboardNormalizer'
import * as t from './actionTypes'
import jobs from '../jobs'

export function fetchBoardAPI() {
  return dispatch => {
    DashboardAPI.fetchDashboard().then(json => {
      if (json.status === 'SUCCESS') {
        const payload = normalizeDashboard(json.board)
        dispatch(fetchBoard(payload))
      }
    })
  }
}

export function fetchBoardAPICallOnly() {
  return DashboardAPI.fetchDashboard()
}

export function fetchBoardParseJSON(dispatch, json) {
  if (json.status === 'SUCCESS') {
    const payload = normalizeDashboard(json.board)
    dispatch(fetchBoard(payload))
  }
}

export function fetchBoard(board) {
  return {
    type: t.FETCH,
    payload: board
  }
}

export function changeJobStatusAPI(jobId, newStatus) {
  return (dispatch, getState) => {
    const job = getState().jobs.byId[jobId]
    const oldStatusArr = getState().dashboard.board[job.status]
    const currentOrder = oldStatusArr.indexOf(job.id)

    const oldBeforeArr = oldStatusArr.slice(0, currentOrder)
    const oldAfterArr = oldStatusArr.slice(currentOrder + 1)

    const newStatusArr = [ ...getState().dashboard.board[newStatus], job.id ]
    const modifiedBoard = {
      [job.status]: [ ...oldBeforeArr, ...oldAfterArr],
      [newStatus]: newStatusArr
    }
    const updatedJob = {
      ...job,
      status: newStatus,
      order: newStatusArr.length - 1
    }

    dispatch(updateJobBoard(modifiedBoard))
    DashboardAPI.changeJobOrder({ decrement: oldAfterArr }).then(json => {
      if (json.status === 'SUCCESS') {
        JobAPI.updateJob(updatedJob).then(json => {
          if (json.status === 'SUCCESS') {
            dispatch(jobs.actions.updateJob(json))
          }
        })
      }
    })
  }
}

export function changeJobOrderAPI(dragId, dropId, status) {
  return (dispatch, getState) => {
    const statusArr = [ ...getState().dashboard.board[status] ]
    const oldIndex = statusArr.indexOf(dragId)
    const newIndex = statusArr.indexOf(dropId)

    const idsToIncrement = statusArr.slice(newIndex, oldIndex)
    const id = statusArr.splice(oldIndex, 1)
    const beforeArr = statusArr.slice(0, newIndex)
    const afterArr = statusArr.slice(newIndex)

    const newStatusArr = beforeArr.concat(id).concat(afterArr)
    dispatch(updateJobBoard({ [status]: newStatusArr }))
    DashboardAPI.changeJobOrder({ increment: idsToIncrement }).then(json => {
      if (json.status === 'SUCCESS') {
        JobAPI.updateJob({ id: dragId, order: newIndex }).then(json => {
          if (json.status === 'SUCCESS') {
            dispatch(jobs.actions.updateJob(json))
          }
        })
      }
    })
  }
}

export function updateJobBoard(updatedBoard) {
  return {
    type: t.UPDATE_BOARD,
    payload: updatedBoard
  }
}

export function swapJobOrder(curOrder, newOrder) {
  return {
    type: 'SWAP_JOB_ORDER',
    curOrder,
    newOrder
  }
}
