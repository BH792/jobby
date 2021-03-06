import React from 'react';

const TouchItem = ({
  subject,
  contact,
  job,
  type,
  date
}) => {
  const touchDate = new Date(date)
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <div className='item touch container'>
      <div className='item touch color' />
      <div className='item touch content'>
        <p className='item touch header'>{subject}</p>
        <p className='item touch subheader'>{touchDate.toDateString()}</p>
        <p className='item touch info'>{contact}</p>
        <p className='item touch info'>{job || ''}</p>
        <p className='item touch info'>{capitalizedType}</p>
      </div>
    </div>
  )
}

export default TouchItem
