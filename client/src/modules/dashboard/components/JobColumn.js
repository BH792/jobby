import React from 'react';
import { DropTarget } from 'react-dnd';
import JobCard from '../components/JobCard';
import DragTypes from '../constants/DragTypes';
import '../styles/JobColumn.css'

const JobColumn = ({status, jobs, connectDropTarget}) => {
  const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1)
  const jobList = jobs.map(job => {
    return <JobCard key={job.id} job={job}/>
  })
  return connectDropTarget(
    <div className={`JobColumn${capitalizedStatus}`}>
      <div className={`JobColumn${capitalizedStatus} JobColumnHeader`}>{capitalizedStatus}</div>
      {jobList}
    </div>
  )
}

const dropTarget = {
  drop(props, monitor, component) {
    let jobId = monitor.getItem().id
    props.changeJobStatus(jobId, props.status)
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export default DropTarget(DragTypes.CARD, dropTarget, dropCollect)(JobColumn);
