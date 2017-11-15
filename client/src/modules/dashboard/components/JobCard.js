import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import DragTypes from '../DragTypes';

const JobCard = ({
  job,
  connectDragSource,
  connectDropTarget,
  isDragging,
  isOver
}) => {
  const color = (num) => {
    let colors = ['#001f3f','#0074D9','#3D9970', '#2ECC40','#FF851B','#FF4136','#85144b','#B10DC9','#DDDDDD','#39CCCC']
    return colors[num]
  }

  let opacity = isDragging ? 0 : (isOver ? 0.5 : 1)

  return connectDropTarget(connectDragSource(
    <div className='JobCard' style={{opacity}}>
      <div className='JobCardHeader' style={{backgroundColor: color(job.id%10)}}>
        <h4>{job.title}</h4>
        <p>{job.company}</p>
      </div>
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
    // let curOrder = monitor.getItem().order
    // let newOrder = props.job.order
    // props.swapJobOrder(curOrder, newOrder)
    // console.log('Dropped from ', curOrder, ' to ', newOrder);
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
