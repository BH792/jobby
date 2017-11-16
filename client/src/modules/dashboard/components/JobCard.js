import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import DragTypes from '../DragTypes';
import { Link } from 'react-router-dom';

const JobCard = ({
  job,
  connectDragSource,
  connectDropTarget,
  isDragging,
  isOver
}) => {
  let opacity = isDragging ? 0 : (isOver ? 0.3 : 1)

  return connectDropTarget(connectDragSource(
    <div style={{opacity}} className='item jobcard'>
      <Link to={`/home/jobs/${job.id}`}>
      <div className='item jobcard container'>
        <div className='item jobcard color'/>
        <div className='item jobcard content'>
          <div className='item jobcard header'>{job.title}</div>
          <div className='item jobcard subheader'>{job.company}</div>
        </div>
      </div>
      </Link>
    </div>
  ))
}

const dragSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.job.id
    }
  }
}

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const dropTarget = {
  drop(props, monitor, component) {
    return {
      dropId: props.job.id
    }
  },
  canDrop(props, monitor) {
    return monitor.getItem().id !== props.job.id
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

export default DropTarget(DragTypes.CARD, dropTarget, dropCollect)(
  DragSource(DragTypes.CARD, dragSource, dragCollect)(JobCard)
);
