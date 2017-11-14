import React from 'react';

const TouchItem = (props) => {
  let { subject } = props

  return (
    <div className='JobItem'>
      <div className='JobItemHeader'>
        <h4>{subject}</h4>
      </div>
    </div>
  )
}

export default TouchItem
