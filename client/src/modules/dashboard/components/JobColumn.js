import React from 'react';
import JobCard from './JobCard';
import DragTypes from '../DragTypes';
import { DropTarget } from 'react-dnd';
import { changeJobStatusAPI } from '../actions';
import { connect } from 'react-redux';
import * as selector from '../selectors'

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
    let dragId = monitor.getItem().id
    let dropId
    if (monitor.getDropResult()) {
      dropId = monitor.getDropResult().dropId
    }
    const status = props.status
    if (!props.jobs.some(job => job.id === dragId)) {
      props.changeJobStatusAPI(dragId, status)
    }
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

function mapStateToProps(state, ownProps) {
  return {
    jobs: selector.mapJobsOfStatus(state, ownProps),
  };
};

export default connect(mapStateToProps, { changeJobStatusAPI })(
  DropTarget(DragTypes.CARD, dropTarget, dropCollect)(JobColumn)
);
