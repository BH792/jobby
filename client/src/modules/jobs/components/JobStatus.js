import React from 'react';
import { Watching, Applied, Interviewed, Offered } from './JobStatusIcons'

const icon = { Watching, Applied, Interviewed, Offered }

const color = {
  watching: '#54aed1',
  applied: '#5f805d',
  interviewed: '#974c6b',
  offered: '#5e568e'
}

const JobStatus = ({status}) => {
  const backgroundColor = color[status]
  const capitalStatus = status[0].toUpperCase() + status.slice(1)
  return (
    <div className='detail status bubble' disabled={true} style={{backgroundColor}}>
      {icon[capitalStatus]()}
      <div className='detail status text'>
        {capitalStatus}
      </div>
    </div>
  )
}

export default JobStatus;
