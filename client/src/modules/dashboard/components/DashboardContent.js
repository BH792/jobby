import React from 'react'
import ConnectedJobBoard from './ConnectedJobBoard'
import GoalCheckList from './GoalCheckList'

const DashboardContent = () => {
  return (
    <div className='content container dashboard'>
      <GoalCheckList />
      <ConnectedJobBoard />
    </div>
  )
}



export default DashboardContent;
