import React from 'react';
import { DragSource } from 'react-dnd';
import DragTypes from '../DragTypes';
import '../../../styles/JobCard.css';

const JobCard = ({ job, connectDragSource, isDragging }) => {
  const color = (num) => {
    let colors = ['#001f3f','#0074D9','#3D9970', '#2ECC40','#FF851B','#FF4136','#85144b','#B10DC9','#DDDDDD','#39CCCC']
    return colors[num]
  }

  const opacity = isDragging ? 0 : 1

  return connectDragSource(
    <div className='JobCard' style={{opacity}}>
      <div className='JobCardHeader' style={{backgroundColor: color(job.id%10)}}>
        <h4>{job.title}</h4>
        <p>{job.company}</p>
      </div>
    </div>
  )
}

const dragSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.job.id,
      order: props.job.order
    }
  }
}

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// NOTE: removed dropTarget as it may not make sense to do
// const dropTarget = {
//   drop(props, monitor, component) {
//     let curOrder = monitor.getItem().order
//     let newOrder = props.job.order
//     props.swapJobOrder(curOrder, newOrder)
//     console.log('Dropped from ', curOrder, ' to ', newOrder);
//   },
//   canDrop(props, monitor) {
//     return monitor.getItem().order !== props.job.order
//   }
// }
//
// function dropCollect(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget()
//   }
// }

export default DragSource(DragTypes.CARD, dragSource, dragCollect)(JobCard)
