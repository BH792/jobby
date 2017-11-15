import React from 'react';

const TouchItem = ({
  subject,
  contact,
  job
}) => {
  return (
    <div className='JobItem'>
      <div className='JobItemHeader'>
        <h4>{subject}</h4>
        <p>{contact}</p>
        <p>{job}</p>
      </div>
    </div>
  )
}

export default TouchItem
