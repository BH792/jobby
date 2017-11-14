export default (data) => {
  const kanbanBoard = {
    watching: [],
    applied: [],
    interviewed: [],
    offered: []
  }
  data.forEach(job => {
    kanbanBoard[job.status].push(job.id)
  })
  return kanbanBoard
}
