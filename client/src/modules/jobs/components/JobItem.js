import React from 'react';

const JobItem = ({title, company, description}) => {
  if (description && description.length > 100) {
    description = description.slice(0, 97) + '...'
  }
  return (
    <div className='JobItem'>
      <div className='JobItemHeader'>
        <h4>{title}</h4>
        <p>{company}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default JobItem
