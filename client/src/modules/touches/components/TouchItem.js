import React from 'react';

const TouchItem = ({
  subject,
  contact,
  job
}) => {
  return (
    <div className='item touch container'>
      <div className='item touch color' />
      <div className='item touch content'>
        <p className='item touch header'>{subject}</p>
        <p className='item touch subheader'>{contact}</p>
        <p className='item touch info'>{job || ''}</p>
      </div>
    </div>
  )
}

export default TouchItem
