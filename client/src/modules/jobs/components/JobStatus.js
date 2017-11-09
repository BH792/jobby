import React from 'react';
import { Watching, Applied, Interviewed, Offered } from './JobStatusIcons'

const icon = { Watching, Applied, Interviewed, Offered }

const JobStatus = ({status}) => {
  const capitalStatus = status[0].toUpperCase() + status.slice(1)
  return (
    <div className='detail status bubble' disabled={true}>
      {icon[capitalStatus]()}
      <div className='detail status text'>
        {capitalStatus}
      </div>
    </div>
  )
}

export default JobStatus;
